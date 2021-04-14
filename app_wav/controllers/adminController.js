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

exports.deleteUser = catchAsync(async (req, res, next) => {
  res.status(200).render('deleteUser', {});
});

exports.deleteOrder = catchAsync(async (req, res, next) => {
  res.status(200).render('deleteOrder', {});
});

exports.deleteContact = catchAsync(async (req, res, next) => {
  res.status(200).render('deleteContact', {});
});

exports.deleteEmail = catchAsync(async (req, res, next) => {
  res.status(200).render('deleteEmail', {});
});

exports.deleteArticle = catchAsync(async (req, res, next) => {
  res.status(200).render('deleteArticle', {});
});

exports.uploadMusic = catchAsync(async (req, res, next) => {
  res.status(200).render('uploadMusic', {});
});

exports.musicUpdate = catchAsync(async (req, res, next) => {
  res.status(200).render('musicUpdate', {});
});
exports.serviceUpdate = catchAsync(async (req, res, next) => {
  res.status(200).render('serviceUpdate', {});
});
