const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  service: {
    required: true,
    type: String,
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
  status: {
    type: String,
    enum: [
      'canceled',
      "wait for manager's approve",
      'ready',
      'in work',
    ],
    default: "wait for manager's approve",
  },
  price: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: [true, 'Order should have text'],
  },
  contacts: {
    type: String,
    required: [true, 'Order should have contacts'],
  },
});

orderSchema.pre(/^find/, function (next) {
  this.populate({
    path: 'customer',
    select: '-__v -passwordChangedAt -orders',
  });
  next();
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
