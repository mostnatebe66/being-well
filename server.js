// server.js
const fastify = require('fastify')({ logger: true });

// Basic GET route
fastify.get('/', async (request, reply) => {
  return { message: 'Hello from Fastify!' };
});

// Add another route (e.g., /api/health)
fastify.get('/api/health', async (request, reply) => {
  return { status: 'ok' };
});

// Start the server
const start = async () => {
  try {
    await fastify.listen({ port: 3000 });
    console.log('Server running at http://localhost:3000');
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
