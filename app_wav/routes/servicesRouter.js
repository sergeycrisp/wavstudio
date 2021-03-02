const routeGenerator = require('./routeFactory');
const Service = require('../models/serviceModel');

const router = routeGenerator(Service, 'service');
module.exports = router;
