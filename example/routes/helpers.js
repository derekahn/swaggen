const { lstatSync, readdirSync } = require('fs');
const { join } = require('path');

// gets all directories within a given directory.
const scan = (source, isFile = false) =>
  readdirSync(source)
    .map(name => join(source, name))
    .filter(dir => {
      const isDir = lstatSync(dir).isDirectory();
      return isFile ? !isDir : isDir;
    });

module.exports = { scan };
