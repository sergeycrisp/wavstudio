const mongoose = require('mongoose');

const musicSchema = new mongoose.Schema(
  {
    created: {
      type: Date,
      default: Date.now,
    },
    link: { type: String, required: true },
    tags: [String],
    license: {
      type: String,
      enum: ['free', 'sale', 'sale-nExc', 'our prod'],
      default: 'sale',
    },
    author: String,
    likes: {
      type: Number,
      default: 0,
    },
    visible: { type: Boolean, default: true },
    linkPurchase: String,
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

const Music = mongoose.model('Music', musicSchema);

module.exports = Music;
