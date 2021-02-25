const express = require('express');

const router = new express.Router({ mergeParams: true });

router
  .route('/')
  .get(
    authController.protect,
    authController.restrictTo('admin'),
    authController.getAllOrders
  )
  .post(authController.createOrder);

router
  .route('/:id')
  .get(
    authController.protect,
    authController.restrictTo('admin'),
    orderController.getOrder
  )
  .patch(
    authController.protect,
    authController.restrictTo('admin'),
    orderController.updateOrder
  )
  .delete(
    authController.protect,
    authController.restrictTo('admin'),
    orderController.deleteOrder
  );
module.exports = router;
