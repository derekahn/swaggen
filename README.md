# Swaggen 🐶

Swagger code generator for organized and maintainable swagger documentations.

## Example ping.doc.js (copy pasta):

```javascript
const tags = [
  {
    name: 'ping',
    description: 'ping the world',
  },
];

const paths = {
  ping: {
    get: {
      summary: 'A simple GET to our example app',
      description: '/ping returns a string',
      tags: ['ping'],
      produces: ['application/json'],
      parameters: [],
      responses: {
        200: {
          description: 'Successful GET',
          schema: {
            type: 'object',
            properties: {
              foo: {
                type: 'string',
                example: 'hello 🌎',
              },
              bar: {
                type: 'integer',
                example: 55,
              },
              baz: {
                type: 'boolean',
                example: true,
              },
            },
          },
        },
      },
    },
  },
};

const definitions = {};

module.exports = { tags, paths, definitions };
```

## Usage:

```shell
$ yarn; cd example && yarn;

# in root of swaggen/
$ yarn docs route=example/routes/ping

# copy the example config above ☝
$ vim example/routes/ping/docs/ping.doc.js

# start example app and go to localhost:8080/swagger
$ cd example/ && yarn start

```

## TODO
* [ ]  convert to NPM 📦

