const express = require('express');
const articleController = require('../controllers/articleController');
const authController = require('../controllers/authController');

const router = express.Router();

// router.param('id', tourController.checkID);

router
  .route('/top-5-liked')
  .get(
    articleController.aliasTopArticles,
    articleController.getAllArticles
  );

router
  .route('/')
  .get(articleController.getAllArticles)
  .post(
    authController.protect,
    authController.restrictTo('admin'),
    articleController.createArticle
  );

router.route('/:id/like').patch(articleController.likeArticle);

router
  .route('/:id')
  .get(articleController.getArticle)
  .patch(
    authController.protect,
    authController.restrictTo('admin'),

    //TODO ADD IMAGE FEATURE
    articleController.uploadArticleImages,
    articleController.resizeArticleImages,
    articleController.updateArticle
  )
  .delete(
    authController.protect,
    authController.restrictTo('admin'),
    articleController.deleteArticle
  );

module.exports = router;
