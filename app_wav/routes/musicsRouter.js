const routeGenerator = require('./routeFactory');
const Music = require('../models/musicModel');

const router = routeGenerator(Music);
module.exports = router;
