const routeGenerator = require('./routeFactory');
const articlesController = require('../controllers/articlesController');

const router = routeGenerator(articlesController);
module.exports = router;
