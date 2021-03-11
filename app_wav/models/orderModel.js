const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  service: {
    required: true,
    type: String,
    enum: [
      'leasing-mp3',
      'leasing-track out',
      'leasing-wav',
      'exclusive rights',
      'custom write',
      'design',
      // 'mastering',
    ],
  },
  anonOrder: { type: Boolean, required: true },
  customer: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: function() {
      return this.anonOrder === false;
    },
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  paid: {
    type: Boolean,
    default: true,
    required: true,
  },
  price: {
    type: Number,
    required: function() {
      return this.paid === true;
    },
  },
});

orderSchema.pre(/^find/, function(next) {
  this.populate({
    path: 'customer',
    select: '-__v -passwordChangedAt',
  });
  next();
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
