const Music = require('../models/musicModel');
const factory = require('./handlerFactory');

exports.getAllMusics = factory.getAll(Music);
exports.getMusic = factory.getOne(Music);
exports.createMusic = factory.createOne(Music);
exports.updateMusic = factory.updateOne(Music);
exports.deleteMusic = factory.deleteOne(Music);
exports.likeMusic = factory.likeOne(Music);
