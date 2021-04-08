const express = require('express');
const musicController = require('../controllers/musicController');
const authController = require('../controllers/authController');

const router = express.Router();

router
  .route('/top-5-liked')
  .get(musicController.aliasTopMusics, musicController.getAllMusics);

//Find by tag
router
  .route('/tag/:tag')
  .get(musicController.aliasTag, musicController.getAllMusics);

//404 user can't see tag without tag property!
router.route('/tag').get(musicController.aliasTag);

router
  .route('/')
  .get(musicController.getAllMusics)
  .post(
    authController.protect,
    authController.restrictTo('admin'),
    musicController.createMusic
  );

router.route('/:id/like').patch(musicController.likeMusic);
router
  .route('/:id')
  .get(musicController.getMusic)
  .patch(
    authController.protect,
    authController.restrictTo('admin'),
    musicController.updateMusic
  )
  .delete(
    authController.protect,
    authController.restrictTo('admin'),
    musicController.deleteMusic
  );

module.exports = router;
