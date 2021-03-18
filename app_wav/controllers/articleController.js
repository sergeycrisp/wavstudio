const multer = require('multer');
const sharp = require('sharp');
const Article = require('../models/articleModel');
const catchAsync = require('./../utils/catchAsync');
const factory = require('./handlerFactory');
const AppError = require('../utils/appError');

const multerStorage = multer.memoryStorage();

const multerFilter = (req, file, cb) => {
  if (file.mimetype.startsWith('image')) {
    cb(null, true);
  } else {
    cb(
      new AppError('Not an image! Please upload only images.', 400),
      false
    );
  }
};

const upload = multer({
  storage: multerStorage,
  fileFilter: multerFilter,
});

exports.uploadArticleImages = upload.fields([
  { name: 'imageCover', maxCount: 1 },
  { name: 'images', maxCount: 10 },
]);

// upload.single('image') req.file
// upload.array('images', 5) req.files

exports.resizeArticleImages = catchAsync(async (req, res, next) => {
  console.log(req.files.imageCover);
  if (!req.files.imageCover) return next();
  // 1) Cover image
  req.body.imageCover = `articles-${
    req.params.id
  }-${Date.now()}-cover.jpg`;
  await sharp(req.files.imageCover[0].buffer)
    .resize(2000, 1333)
    .toFormat('jpg')
    .jpeg({ quality: 90 })
    .toFile(`public/img/articles/${req.body.imageCover}`);

  next();
});

exports.aliasTopArticles = (req, res, next) => {
  req.query.limit = '5';
  req.query.sort = 'likes';
  // req.query.fields = 'name,price,ratingsAverage,summary,difficulty';
  next();
};

exports.getAllArticles = factory.getAll(Article);
exports.getArticle = factory.getOne(Article);
exports.createArticle = factory.createOne(Article);
exports.updateArticle = factory.updateOne(Article);
exports.deleteArticle = factory.deleteOne(Article);
exports.likeArticle = factory.likeOne(Article);
