const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
  serviceHeader: {
    type: String,
    required: [true, 'A service must have header'],
    trim: true,
    minLength: [8, 'A service header must be longer, than 8 symbols'],
    maxLength: [100, 'A service header must be shorter, than 100 symbols'],
  },
  serviceText: {
    type: String,
    required: [true, 'A service must have text'],
    trim: true,
    minLength: [10, 'A service must be longer, than 8 symbols'],
    maxLength: [1000, 'A service must be shorter, than 100 symbols'],
  },
  created: {
    type: Date,
    default: Date.now,
  },
  license: {
    type: String,
    required: 'true',
  },
  priceUSD: {
    type: Number,
    min: 10,
    max: 3000,
    required: function () {
      return this.license !== 'free';
    },
  },
  slug: String,
  imageLink: String,
  visible: Boolean,
});

const Service = mongoose.model('Service', serviceSchema);

module.exports = Service;
