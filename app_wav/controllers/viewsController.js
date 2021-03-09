const Article = require('../models/articleModel');
// const User = require('../models/userModel');
// const Booking = require('../models/bookingModel');
const catchAsync = require('../utils/catchAsync');
// const AppError = require('../utils/appError');

// exports.alerts = (req, res, next) => {
//   const { alert } = req.query;
//   if (alert === 'booking')
//     res.locals.alert =
//       "Your booking was successful! Please check your email for a confirmation. If your booking doesn't show up here immediatly, please come back later.";
//   next();
// };

exports.getArticle = catchAsync(async (req, res, next) => {
  // 1) Get tour data from collection
  const articles = await Article.find();

  // 2) Build template
  // 3) Render that template using tour data from 1)
  res.status(200).render('base', {
    title: 'All Article',
    articles,
  });
});

// // eslint-disable-next-line node/no-unsupported-features/es-syntax
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
//   const tourIDs = bookings.map(el => el.tour);
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
