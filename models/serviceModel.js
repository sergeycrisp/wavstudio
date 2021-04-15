const mongoose = require('mongoose');
const slugify = require('slugify');

const serviceSchema = new mongoose.Schema(
  {
    serviceHeader: {
      type: String,
      required: [true, 'A service must have header'],
      trim: true,
      minLength: [
        4,
        'A service header must be longer, than 8 symbols',
      ],
      maxLength: [
        20,
        'A service header must be shorter, than 100 symbols',
      ],
    },
    serviceText: {
      type: String,
      required: [true, 'A service must have text'],
      trim: true,
      minLength: [10, 'A service must be longer, than 8 symbols'],
      maxLength: [
        1000,
        'A service must be shorter, than 100 symbols',
      ],
    },
    created: {
      type: Date,
      default: Date.now,
    },
    priceUSD: {
      type: Number,
      required: true,
    },
    slug: String,
    visible: { type: Boolean, default: true },
    rights: {
      Exclusive: Boolean,
      Video: Boolean,
      TrackOut: Boolean,
      Prod: Boolean,
      Royalty: Boolean,
      Support: Boolean,
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

// DOCUMENT MIDDLEWARE: runs before .save() and .create()
serviceSchema.pre('save', function (next) {
  this.slug = slugify(this.serviceHeader, { lower: true });
  next();
});

// QUERY MIDDLEWARE
serviceSchema.pre(/^find/, function (next) {
  this.find({ visible: { $ne: false } });

  this.start = Date.now();
  next();
});

serviceSchema.post(/^find/, function (docs, next) {
  //Logs
  // eslint-disable-next-line no-console
  console.log(`Query took ${Date.now() - this.start} milliseconds!`);
  next();
});

const Service = mongoose.model('Service', serviceSchema);

module.exports = Service;
