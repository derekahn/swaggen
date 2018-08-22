const { promisify } = require('util');

const mkdirp = promisify(require('mkdirp'));
const write = promisify(require('fs').writeFile);

const { doc, entry } = require('./boilerplate');

const target = process.argv
  .map(arg => {
    if (arg.includes('route')) {
      return arg
        .split('=')
        .pop()
        .trim();
    }
  })
  .pop();

if (!target) {
  const err = new Error('swaggen: route=<path> required!');
  throw err;
}

(async () => {
  try {
    const basePath = `${process.cwd()}/${target}`;
    const docsDir = `${basePath}/docs`;

    await mkdirp(docsDir);

    const files = require('require-all')({
      dirname: basePath,
      filter(fileName) {
        if (fileName.includes('index')) {
          return false;
        }
        return fileName;
      },
      recursive: true,
    });

    // Write doc files
    Object.keys(files)
      .map(name => `${name.split('.js')[0]}.doc.js`)
      .forEach(async file => {
        await write(`${docsDir}/${file}`, doc);
      });

    await write(`${docsDir}/_index.js`, entry(''));
  } catch (err) {
    throw err;
  }
})();
