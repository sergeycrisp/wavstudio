const express = require('express');
const factory = require('../controllers/handlerFactory');

function routerInstance(Model, serviceFlag = 'no') {
  const router = new express.Router({ mergeParams: true });
  router
    .route('/')
    .get(factory.getAll(Model))
    .post(
      //     authController.protect,
      //     authController.restrictTo('admin'),
      factory.createOne(Model)
    );

  if (serviceFlag !== 'service') {
    router.route('/:id/like').post(factory.likeOne(Model));
  }

  router
    .route('/:id')
    .get(factory.getOne(Model))
    .patch(
      //     authController.protect,
      //     authController.restrictTo('admin'),
      factory.updateOne(Model)
    )
    .delete(
      //     authController.protect,
      //     authController.restrictTo('admin'),
      factory.deleteOne(Model)
    );

  return router;
}

module.exports = routerInstance;
