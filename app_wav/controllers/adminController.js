const { promisify } = require('util');
const jwt = require('jsonwebtoken');

// const Music = require('../models/musicModel');
const User = require('../models/userModel');
const factory = require('./handlerFactory');
// const Article = require('../models/articleModel');

// const Order = require('../models/orderModel');
// const Service = require('../models/serviceModel');
const catchAsync = require('../utils/catchAsync');
// const AppError = require('../utils/appError');
// const APIFeatures = require('../utils/apiFeatures');

exports.getError = catchAsync(async (req, res, next) => {
  res.status(404).render('404', {});
});

exports.getHome = catchAsync(async (req, res, next) => {
  res.status(200).render('index', {});
});

exports.getAbout = catchAsync(async (req, res, next) => {
  res.status(200).render('about', {});
});

exports.getAdmin = catchAsync(async (req, res, next) => {
  res.status(200).render('admin', {});
});

exports.getAccount = catchAsync(async (req, res, next) => {
  // Find all orders
  const decoded = await promisify(jwt.verify)(
    req.cookies.jwt,
    process.env.JWT_SECRET
  );

  const user = await User.findById(decoded.id);
  res.status(200).render('account', { user: user });
});

exports.getSettings = catchAsync(async (req, res, next) => {
  const decoded = await promisify(jwt.verify)(
    req.cookies.jwt,
    process.env.JWT_SECRET
  );

  const user = await User.findById(decoded.id);
  res.status(200).render('settings', { user: user });
});
