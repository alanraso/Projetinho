import { PrismaClient } from '@prisma/client';
import Fastify from 'fastify';

const PORT = 3000;

const fastify = Fastify();

fastify.get('/hello', async function handler(request, reply) {
  return { hello: 'world' };
});


const client = new PrismaClient({ datasourceUrl: 'postgres://taqtile:1234qwer@localhost:5432/local' });

try {
  await fastify.listen({ port: PORT });
  console.info(`Server is running at http://localhost:${PORT}`);
  console.log(await client.user.findMany());
} catch (error) {
  console.error(error)
  process.exit(1);
}
