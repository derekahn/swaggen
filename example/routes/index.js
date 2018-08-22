const router = require('express').Router();
const { scan: getDirectories } = require('./helpers');

// routes to exclude
const BLACK_LIST = [];

const routes = getDirectories(__dirname)
  .map(route => route.replace(__dirname, ''))
  .filter(route => !BLACK_LIST.includes(route));

routes.forEach(route => {
  router.use(route, require(`.${route}/index`));
});

module.exports = router;
