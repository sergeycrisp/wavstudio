// const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
// const Service = require('../models/serviceModel');
// const User = require('../models/userModel');
const Order = require('../models/orderModel');
// const catchAsync = require('../utils/catchAsync');
const factory = require('./handlerFactory');

exports.createOrder = factory.createOne(Order);
exports.getOrder = factory.getOne(Order);
exports.getAllOrders = factory.getAll(Order);
exports.updateOrder = factory.updateOne(Order);
exports.deleteOrder = factory.deleteOne(Order);
