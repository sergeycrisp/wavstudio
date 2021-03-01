const routeGenerator = require('./routeFactory');
const Article = require('../models/articleModel');

const router = routeGenerator(Article);
module.exports = router;
