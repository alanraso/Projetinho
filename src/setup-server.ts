import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { resolvers } from './resolvers.js';
import { typeDefs } from './typedefs.js';

export let server: ApolloServer;

export async function setupServer() {
  server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  const { url } = await startStandaloneServer(server, {
    listen: { port: +process.env.PORT },
  });

  console.log(`Server started at: ${url}`);
}
