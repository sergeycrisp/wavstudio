const Article = require('../models/articleModel');

exports.getAllInstance = async (req, res) => {
  const articles = await Article.find();
  // SEND RESPONSE
  res.status(200).json({
    status: 'realized',
    data: articles,
  });
};

exports.createInstance = async (req, res) => {
  const newArticle = await Article.create({
    name: 'Silence',
    header: 'our first article',
  });

  // SEND RESPONSE
  res.status(200).json({
    status: 'created',
    data: newArticle,
  });
};
