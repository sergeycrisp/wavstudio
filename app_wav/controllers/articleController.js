// const multer = require('multer');
// const sharp = require('sharp');
const Article = require('../models/articleModel');
// const catchAsync = require('./../utils/catchAsync');
const factory = require('./handlerFactory');
const AppError = require('../utils/appError');

exports.aliasTopArticles = (req, res, next) => {
  req.query.limit = '5';
  req.query.sort = 'likes';
  next();
};

exports.aliasTag = (req, res, next) => {
  req.query.sort = req.params.tag;
  if (!req.query.sort)
    next(new AppError("This tag doesn't exist", 404));

  next();
};

exports.getAllArticles = factory.getAll(Article);
exports.getArticle = factory.getOne(Article);
exports.createArticle = factory.createOne(Article);
exports.updateArticle = factory.updateOne(Article);
exports.deleteArticle = factory.deleteOne(Article);
exports.likeArticle = factory.likeOne(Article);
