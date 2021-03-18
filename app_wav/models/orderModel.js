const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  service: {
    required: true,
    type: mongoose.Schema.ObjectId,
    ref: 'Service',
  },
  customer: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: true,
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
  }).populate({
    path: 'service',
    select: '-__v -created -slug -visible',
  });
  next();
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
