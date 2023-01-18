import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { resolvers } from './resolvers';
import { typeDefs } from './schema';
import { DataSource } from 'typeorm';

async function connectedDb() {
  const datasource = new DataSource({
    type: 'postgres',
    url: process.env.DATABASE_URL,
  });

  await datasource.initialize();
  console.info('DB connected!');
}

async function setupServer() {
  const server = new ApolloServer({ typeDefs, resolvers });
  const { url } = await startStandaloneServer(server, { listen: { port: +process.env.PORT } });
  console.info(`Server running on: ${url}`);
}

export async function setup() {
  await connectedDb();
  await setupServer();
}
