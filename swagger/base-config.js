module.exports = {
  swagger: '2.0',
  info: {
    version: '1.0.0',
    title: 'Fancy API',
    description: 'Describing a descriptive description.',
  },
  host: 'http://localhost:8080',
  basePath: '/',
  schemes: ['http'],
  consumes: ['application/json'],
  produces: ['application/json'],
  securityDefinitions: {
    basicAuth: {
      type: 'basic',
    },
    apiKeyAuth: {
      type: 'apiKey',
      in: 'header',
      name: 'X-API-Key',
    },
  },
  security: [
    {
      apiKeyAuth: [],
    },
  ],
};
