const express = require('express');
const articleController = require('../controllers/articleController');
const authController = require('../controllers/authController');

const router = express.Router();

router
  .route('/top-5-liked')
  .get(
    articleController.aliasTopArticles,
    articleController.getAllArticles
  );

//Find by tag
router
  .route('/tag/:tag')
  .get(articleController.aliasTag, articleController.getAllArticles);

//404 user can't see tag without tag property!
router.route('/tag').get(articleController.aliasTag);

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
    // articleController.uploadArticleImages,
    // articleController.resizeArticleImages,
    articleController.updateArticle
  )
  .delete(
    authController.protect,
    authController.restrictTo('admin'),
    articleController.deleteArticle
  );

module.exports = router;
