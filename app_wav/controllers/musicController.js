const Music = require('../models/musicModel');
const factory = require('./handlerFactory');

exports.aliasTopMusics = (req, res, next) => {
  req.query.limit = '5';
  req.query.sort = 'likes';
  // req.query.fields = 'name,price,ratingsAverage,summary,difficulty';
  next();
};

exports.getAllMusics = factory.getAll(Music);
exports.getMusic = factory.getOne(Music);
exports.createMusic = factory.createOne(Music);
exports.updateMusic = factory.updateOne(Music);
exports.deleteMusic = factory.deleteOne(Music);
