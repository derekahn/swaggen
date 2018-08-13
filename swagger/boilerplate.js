module.exports = {
  entry(route) {
    return `// DO NOT TOUCH THIS FILE, IT'S GENERATED!
  const files = require('require-all')({
  dirname: __dirname,
  filter: /.+doc\.js$/,
  recursive: false,
});

const BASE_PATH = '/${route}';

const format = (paths = {}, basePath = '') =>
  Object.keys(paths).reduce((obj, key) => {
    const newPathName = basePath + '/' + key;
    obj[newPathName] = paths[key];

    return obj;
  }, {});

// falttens and merges all docs
const docs = Object.keys(files).reduce((doc, fileName) => {
  const { tags, paths, definitions } = files[fileName];
  const newPaths = format(paths, BASE_PATH);

  return {
    tags: doc.tags.concat(tags),
    paths: { ...doc.paths, ...newPaths },
    definitions: { ...doc.definitions, ...definitions },
  };
}, {
  tags: [],
  paths: {},
  definitions: {},
});

module.exports = docs;`;
  },

  doc: `const tags = [
    {
      name: 'Route',
      description: 'Something goes here',
    },
  ];

  const paths = {
    routePath: {
      get: {
        summary: 'Summerizing',
        description: 'Describing a descriptive description.',
        tags: ['route'],
        produces: ['application/json'],
        parameters: [
          {
            name: '',
            in: '',
            description: '',
            required: true,
            type: '',
          },
        ],
        responses: {
          200: {
            description: 'Successful return',
            schema: {
              type: 'object',
              properties: {
                success: {
                  type: 'boolean',
                  example: true,
                },
                data: {
                  type: 'object',
                  properties: {
                    foo: {
                      type: 'string',
                      example: 'hello world',
                    },
                    bar: {
                      type: 'integer',
                      example: 55,
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
  };

  const definitions = {};

  module.exports = { tags, paths, definitions };`,
};
