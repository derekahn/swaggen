const router = require( 'express' ).Router();

router.get('/', (request, reply) => {
  reply.send('Hello 🌎');
});

module.exports = router;
