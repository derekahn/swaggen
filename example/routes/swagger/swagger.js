const router = require('express').Router();
const { join } = require('path');

// due to nested swaggen/example/ dir
const configPath = join(__dirname, '../../../swagger');
const routesPath = join(__dirname, '../../routes');

const swaggerUI = require('swagger-ui-express');
const swaggerConfig = require(configPath)(routesPath);

router.use('/', swaggerUI.serve, swaggerUI.setup(swaggerConfig));

module.exports = router;
