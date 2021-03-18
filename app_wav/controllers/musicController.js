const Music = require('../models/musicModel');
const factory = require('./handlerFactory');
const AppError = require('../utils/appError');

exports.aliasTopMusics = (req, res, next) => {
  req.query.limit = '5';
  req.query.sort = 'likes';
  // req.query.fields = 'name,price,ratingsAverage,summary,difficulty';
  next();
};
exports.aliasTag = (req, res, next) => {
  req.query.sort = req.params.tag;
  if (!req.query.sort)
    next(new AppError("This tag doesn't exist", 404));

  next();
};

exports.getAllMusics = factory.getAll(Music);
exports.getMusic = factory.getOne(Music);
exports.createMusic = factory.createOne(Music);
exports.updateMusic = factory.updateOne(Music);
exports.deleteMusic = factory.deleteOne(Music);
exports.likeMusic = factory.likeOne(Music);
