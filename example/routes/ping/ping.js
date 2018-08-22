const router = require('express').Router();

router.get('/', (request, reply) => {
  reply.json({
    foo: 'Aloha 🤙🏽',
    bar: 21,
    baz: false,
  });
});

module.exports = router;
