# Swagger Things

Implementation of [swagger](https://swagger.io). In each route directory, a nested subdirectory `docs/` will be auto generated with it's corresponding file that mirrors a route file. For example `routes/auth/login.js` will have a mirrored file `routes/auth/docs/login.doc.js`

> Authors/owners of the route are responsible for documenting their route's API. Route owners only have to edit `docs\*.doc.js` file. After each edit of `docs/*.doc.js` it is highly recommended to run `yarn test:docs` to validate their swagger syntax.

## Design

```shell
 ./swagger
├── boilerplate.js     // docs/**.doc.js & docs/_index.js templates
├── base-config.js     // things that don't change often
├── generator.js       // code-generator that creates the boilerplate and setup
└── index.js           // entry point; imports and merges all route documentations
```

## Usage:

```shell
$ yarn docs routePath=path

$ yarn test:docs

$ yarn start
```
