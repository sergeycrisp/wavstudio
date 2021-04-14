const { promisify } = require('util');
const jwt = require('jsonwebtoken');

const Music = require('../models/musicModel');
const User = require('../models/userModel');
// const Order = require('../models/orderModel');
const Service = require('../models/serviceModel');
const catchAsync = require('../utils/catchAsync');
// const AppError = require('../utils/appError');
const APIFeatures = require('../utils/apiFeatures');
// exports.alerts = (req, res, next) => {
//   const { alert } = req.query;
//   if (alert === 'booking')
//     res.locals.alert =
//       "Your booking was successful! Please check your email for a confirmation. If your booking doesn't show up here immediatly, please come back later.";
//   next();
// };

// exports.getOverview = catchAsync(async (req, res, next) => {
//   // 1) Get tour data from collection
//   const tours = await Tour.find();

//   // 2) Build template
//   // 3) Render that template using tour data from 1)
//   res.status(200).render('overview', {
//     title: 'All Tours',
//     tours,
//   });
// });

exports.getError = catchAsync(async (req, res, next) => {
  res.status(404).render('404', {});
});

exports.getHome = catchAsync(async (req, res, next) => {
  const servicesDB = await Service.find();

  const features = new APIFeatures(Music.find(), {
    limit: 4,
    page: 1,
  })
    .paginate()
    .sort();

  const musicsDB = await features.query;
  musicsDB.forEach((track) => {
    track.link = track.link
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>');
    return track;
  });

  res.status(200).render('index', { servicesDB, musicsDB });
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

exports.getBlog = catchAsync(async (req, res, next) => {
  res.status(200).render('blog', {});
});

exports.getArticle = catchAsync(async (req, res, next) => {
  res.status(200).render('article', {});
});

exports.getContacts = catchAsync(async (req, res, next) => {
  res.status(200).render('contacts', {});
});

exports.getMusic = catchAsync(async (req, res, next) => {
  const filter = {};

  const features = new APIFeatures(
    Music.find(filter),
    req.query
  ).filter();
  // .paginate();

  const musicsDB = await features.query;
  musicsDB.forEach((track) => {
    track.link = track.link
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>');
    return track;
  });

  res.status(200).render('music', { musicsDB });
});

exports.getServices = catchAsync(async (req, res, next) => {
  const servicesDB = await Service.find();
  res.status(200).render('services', { servicesDB });
});

exports.getSign = catchAsync(async (req, res, next) => {
  res.status(200).render('sign', {});
});
