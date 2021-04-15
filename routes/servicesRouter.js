const express = require('express');
const serviceController = require('../controllers/serviceController');
const authController = require('../controllers/authController');

const router = express.Router();

// router.param('id', tourController.checkID);

router
  .route('/')
  .get(serviceController.getAllServices)
  .post(
    authController.protect,
    authController.restrictTo('admin'),
    serviceController.createService
  );

router
  .route('/:id')
  .get(serviceController.getService)
  .patch(
    authController.protect,
    authController.restrictTo('admin'),
    serviceController.updateService
  )
  .delete(
    authController.protect,
    authController.restrictTo('admin'),
    serviceController.deleteService
  );

module.exports = router;
