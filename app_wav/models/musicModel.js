const mongoose = require('mongoose');
const slugify = require('slugify');

const musicSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
  },
  created: {
    type: Date,
    default: Date.now,
  },
  link: String,
  author: String,
  slug: String,
  tags: [String],
  license: {
    type: String,
    enum: ['free', 'sale', 'sale-nExc'],
    default: 'sale',
  },
  likes: {
    type: Number,
    default: 0,
  },
  hidden: Boolean,
});

// DOCUMENT MIDDLEWARE: runs before .save() and .create()
musicSchema.pre('save', function(next) {
  this.slug = slugify(this.name, { lower: true });
  next();
});

musicSchema.post(/^find/, function(docs, next) {
  console.log(`Query took ${Date.now() - this.start} milliseconds!`);
  next();
});
const Music = mongoose.model('Music', musicSchema);

module.exports = Music;
