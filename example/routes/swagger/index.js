const router = require('express').Router();
const { scan: getFiles } = require('../helpers');

const routes = getFiles(__dirname, true)
  .map(route => route.replace(__dirname, '.'))
  .filter(route => !route.includes('index.js'));

routes.forEach(route => router.use('/', require(route)));

module.exports = router;
