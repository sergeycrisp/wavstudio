const Article = require('../models/articleModel');
const catchAsync = require('../utils/catchAsync');

exports.getAllInstance = async (req, res) => {
  const articles = await Article.find();
  // SEND RESPONSE
  res.status(200).json({
    status: 'realized',
    data: articles,
  });
};

exports.createInstance = catchAsync(async (req, res, next) => {
  const doc = await Article.create(req.body);

  res.status(201).json({
    status: 'success',
    data: {
      data: doc,
    },
  });
});
