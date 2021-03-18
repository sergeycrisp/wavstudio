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
    author: String,
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
    sourceLink: {
      type: String,
      required: [true, 'An article should have sourceLink'],
    },
    tags: [String],
    likes: {
      type: Number,
      default: 0,
    },
    visible: { type: Boolean, default: true },
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

const Article = mongoose.model('Article', articleSchema);

module.exports = Article;
