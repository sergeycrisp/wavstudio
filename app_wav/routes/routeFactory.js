const express = require('express');
// const authController = require('../controllers/authController');

function routerInstance(
  instanceController
  //  route = 'default'
) {
  const router = new express.Router({ mergeParams: true });
  router.route('/').get(instanceController.getAllInstance).post(
    //     authController.protect,
    //     authController.restrictTo('admin'),
    instanceController.createInstance
  );

  // if (route !== 'services') {}
  //   router.route('/:id/like').patch(instanceController.likeInstance);
  // }

  // router
  //   .route('/:id')
  //   .get(instanceController.getInstance)
  //   .patch(
  //     authController.protect,
  //     authController.restrictTo('admin'),
  //     instanceController.updateInstance
  //   )
  //   .delete(
  //     authController.protect,
  //     authController.restrictTo('admin'),
  //     instanceController.deleteInstance
  //   );
  return router;
}

module.exports = routerInstance;
