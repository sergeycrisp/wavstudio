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

router
  .route('/:id')
  .get(articleController.getArticle)
  .patch(
    authController.protect,
    authController.restrictTo('admin'),
    articleController.uploadArticleImages,
    articleController.resizeArticleImages,
    articleController.updateArticle
  )
  .delete(
    authController.protect,
    authController.restrictTo('admin', 'lead-guide'),
    articleController.deleteArticle
  );

module.exports = router;
