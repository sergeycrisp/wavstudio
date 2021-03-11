const mongoose = require('mongoose');
const slugify = require('slugify');

const articleSchema = new mongoose.Schema(
  {
    header: {
      type: String,
      required: [true, 'An article must have header'],
      trim: true,
      minLength: [
        8,
        'An article header must be longer, than 8 symbols',
      ],
      maxLength: [
        100,
        'An article header must be shorter, than 100 symbols',
      ],
    },
    name: {
      type: String,
      unique: true,
      required: [true, 'An article should have name'],
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },

    slug: String,
    text: {
      type: String,
      required: [true, 'An article should have text'],
    },
    tags: [String],
    likes: {
      type: Number,
      default: 0,
    },
    visible: { type: Boolean, default: true },
    coverImg: String,
    images: [String],
    author: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
      default: '6044eb36a4af4d2c1c40639a',
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

// articleSchema.index({ slug: 1 });

// DOCUMENT MIDDLEWARE: runs before .save() and .create()
articleSchema.pre('save', function(next) {
  this.slug = slugify(this.name, { lower: true });
  next();
});

// QUERY MIDDLEWARE
articleSchema.pre(/^find/, function(next) {
  this.find({ visible: { $ne: false } });
  this.start = Date.now();
  next();
});

articleSchema.post(/^find/, function(docs, next) {
  //Logs
  // eslint-disable-next-line no-console
  console.log(`Query took ${Date.now() - this.start} milliseconds!`);
  next();
});

articleSchema.pre(/^find/, function(next) {
  this.populate({
    path: 'author',
    select: '-__v -passwordChangedAt',
  });

  next();
});

const Article = mongoose.model('Article', articleSchema);

module.exports = Article;
