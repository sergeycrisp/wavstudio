// const { promisify } = require('util');
// const jwt = require('jsonwebtoken');

// // const Music = require('../models/musicModel');
// const User = require('../models/userModel');

// const Article = require('../models/articleModel');

// const Order = require('../models/orderModel');
// const Service = require('../models/serviceModel');
const catchAsync = require('../utils/catchAsync');
// const AppError = require('../utils/appError');
// const APIFeatures = require('../utils/apiFeatures');

exports.deleteMusic = catchAsync(async (req, res, next) => {
  res.status(200).render('deleteM', {});
});
