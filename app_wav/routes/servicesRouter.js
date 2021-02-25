const routeGenerator = require('./routeFactory');

const router = routeGenerator(servicesController, 'service');

module.exports = router;
