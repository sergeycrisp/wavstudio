const routeGenerator = require('./routeFactory');

const router = routeGenerator(articlesController);

module.exports = router;
