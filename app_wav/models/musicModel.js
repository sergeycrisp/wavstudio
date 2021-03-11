const mongoose = require('mongoose');

const musicSchema = new mongoose.Schema(
  {
    created: {
      type: Date,
      default: Date.now,
    },
    link: { type: String, required: true },
    author: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
      default: '6044eb36a4af4d2c1c40639a',
    },
    tags: [String],
    license: {
      type: String,
      enum: ['free', 'sale', 'sale-nExc', 'our prod'],
      default: 'sale',
    },
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

// DOCUMENT MIDDLEWARE: runs before .save() and .create()
musicSchema.pre(/^find/, function(next) {
  this.find({ visible: { $ne: false } });

  this.start = Date.now();
  next();
});

musicSchema.post(/^find/, function(docs, next) {
  //Logs
  // eslint-disable-next-line no-console
  console.log(`Query took ${Date.now() - this.start} milliseconds!`);
  next();
});

musicSchema.pre(/^find/, function(next) {
  this.populate({
    path: 'author',
    select: '-__v -passwordChangedAt',
  });

  next();
});

const Music = mongoose.model('Music', musicSchema);

module.exports = Music;
