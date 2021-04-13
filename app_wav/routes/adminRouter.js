const express = require('express');
const adminController = require('../controllers/adminController');
const authController = require('../controllers/authController');
const musicController = require('../controllers/musicController');
const userController = require('./../controllers/userController');
const orderController = require('../controllers/orderController');
const serviceController = require('../controllers/serviceController');

const router = express.Router();

router.use(
  authController.protect,
  authController.restrictTo('admin')
);

//GetAll
router.get('/music/getAll', musicController.getAllMusics);
router.get('/emails/getAll', userController.getAllEmails);
router.get('/contact/getAll', userController.getAllContactForms);
router.get('/orders/getAll', orderController.getAllOrders);
router.get('/users/getAll', userController.getAllUsers);
router.get('/services/getAll', serviceController.getAllServices);

//Delete page
router.get('/music/delete', adminController.deleteMusic);
// router.get('/emails/delete', userController.getAllEmails);
// router.get('/contact/delete', userController.getAllContactForms);
// router.get('/orders/delete', orderController.getAllOrders);
// router.get('/users/delete', userController.getAllUsers);

module.exports = router;
