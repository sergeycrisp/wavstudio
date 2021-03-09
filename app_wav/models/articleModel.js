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
    created: {
      type: Date,
      default: Date.now,
    },
    author: {
      required: [true, 'A article must have an author'],

      type: String,
      default: 'admin',
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
    visible: Boolean,
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

// DOCUMENT MIDDLEWARE: runs before .save() and .create()
articleSchema.pre('save', function(next) {
  this.slug = slugify(this.name, { lower: true });
  next();
});

// QUERY MIDDLEWARE
articleSchema.pre(/^find/, function(next) {
  this.find({ visible: { $ne: true } });

  this.start = Date.now();
  next();
});

articleSchema.post(/^find/, function(docs, next) {
  console.log(`Query took ${Date.now() - this.start} milliseconds!`);
  next();
});

const Article = mongoose.model('Article', articleSchema);

module.exports = Article;
