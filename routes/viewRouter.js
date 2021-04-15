const express = require('express');
const viewsController = require('../controllers/viewsController');
const authController = require('../controllers/authController');

const router = express.Router();

// router.use(viewsController.alerts);

router.get('/404', viewsController.getError);
router.get('/', viewsController.getHome);
router.get('/about', viewsController.getAbout);
router.get('/account', viewsController.getAccount);
router.get('/blog', viewsController.getBlog);
router.get('/article', viewsController.getArticle);
router.get('/contacts', viewsController.getContacts);
router.get('/music', viewsController.getMusic);
router.get('/services', viewsController.getServices);
router.get('/settings', viewsController.getSettings);
router.get('/sign', viewsController.getSign);
router.get(
  '/admin',
  authController.protect,
  authController.restrictTo('admin'),
  viewsController.getAdmin
);

module.exports = router;
