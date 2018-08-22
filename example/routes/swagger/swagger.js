const router = require('express').Router();
const { join } = require('path');

const swaggerUI = require('swagger-ui-express');
const swaggerConfig = require(join(__dirname, '../../../swagger'));

router.use('/', swaggerUI.serve, swaggerUI.setup(swaggerConfig));

module.exports = router;
