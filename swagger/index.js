const importing = require('require-all');
const baseConfig = require('./base-config');

module.exports = function swaggerConfig(path) {
  const files = importing({
    dirname: path,
    filter: /_index\.js$/,
    recursive: true,
  });

  // This is a swaggen convention
  const ENTRY_FILE = '_index.js';

  try {
    const initialState = {
      tags: [],
      paths: {},
      definitions: {},
    };

    // falttens and merges all docs
    const { tags, paths, definitions } = Object.keys(files).reduce(
      (obj, fileName) => {
        const currentFile = files[fileName].docs[ENTRY_FILE];

        return {
          tags: obj.tags.concat(currentFile.tags),
          paths: {
            ...obj.paths,
            ...currentFile.paths,
          },
          definitions: {
            ...obj.definitions,
            ...currentFile.definitions,
          },
        };
      },
      initialState,
    );

    const mergedConfig = JSON.stringify({
      ...baseConfig,
      tags,
      paths,
      definitions,
    });

    return JSON.parse(mergedConfig);
  } catch (err) {
    throw err;
  }
};
