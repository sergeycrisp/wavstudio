// const Music = require('../models/musicModel');
// const User = require('../models/userModel');
// const Order = require('../models/orderModel');
const Service = require('../models/serviceModel');
const catchAsync = require('../utils/catchAsync');
// const AppError = require('../utils/appError');

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
  res.status(200).render('index', {});
});

exports.getAbout = catchAsync(async (req, res, next) => {
  res.status(200).render('about', {});
});

exports.getAccount = catchAsync(async (req, res, next) => {
  res.status(200).render('account', {});
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
  res.status(200).render('music', {});
});

exports.getServices = catchAsync(async (req, res, next) => {
  const servicesDB = await Service.find();
  res.status(200).render('services', { servicesDB });
});

exports.getSettings = catchAsync(async (req, res, next) => {
  res.status(200).render('settings', {});
});

exports.getSign = catchAsync(async (req, res, next) => {
  res.status(200).render('sign', {});
});

// eslint-disable-next-line node/no-unsupported-features/es-syntax
// exports.getTour = catchAsync(async (req, res, next) => {
//   // 1) Get the data, for the requested tour (including reviews and guides)
//   const tour = await Tour.findOne({ slug: req.params.slug }).populate(
//     {
//       path: 'reviews',
//       fields: 'review rating user',
//     }
//   );

//   if (!tour) {
//     return next(
//       new AppError('There is no tour with that name.', 404)
//     );
//   }

//   // 2) Build template
//   // 3) Render template using data from 1)
//   res.status(200).render('tour', {
//     title: `${tour.name} Tour`,
//     tour,
//   });
// });

// exports.getLoginForm = (req, res) => {
//   res.status(200).render('login', {
//     title: 'Log into your account',
//   });
// };

// exports.getAccount = (req, res) => {
//   res.status(200).render('account', {
//     title: 'Your account',
//   });
// };

// exports.getMyTours = catchAsync(async (req, res) => {
//   // 1) Find all bookings
//   const bookings = await Booking.find({ user: req.user.id });

//   // 2) Find tours with the returned IDs
//   const tourIDs = bookings.map((el) => el.tour);
//   const tours = await Tour.find({ _id: { $in: tourIDs } });

//   res.status(200).render('overview', {
//     title: 'My Tours',
//     tours,
//   });
// });

// exports.updateUserData = catchAsync(async (req, res, next) => {
//   const updatedUser = await User.findByIdAndUpdate(
//     req.user.id,
//     {
//       name: req.body.name,
//       email: req.body.email,
//     },
//     {
//       new: true,
//       runValidators: true,
//     }
//   );

//   res.status(200).render('account', {
//     title: 'Your account',
//     user: updatedUser,
//   });
// });
