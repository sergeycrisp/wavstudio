const express = require('express');
const orderController = require('../controllers/orderController');
const authController = require('../controllers/authController');

const router = express.Router();

router.use(authController.protect);

router.route('/createOrder').post(orderController.createOrder);

router.use(authController.restrictTo('admin'));
router
  .route('/:id')
  .get(orderController.getOrder)
  .patch(orderController.updateOrder)
  .delete(orderController.deleteOrder);
router.route('/').get(orderController.getAllOrders);

module.exports = router;
