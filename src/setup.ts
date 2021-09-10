import { createConnection } from "typeorm";
import { ApolloServer, gql } from 'apollo-server';

async function setupDatabase() {
  await createConnection({
    type: "postgres",
    url: process.env.DATABASE_URL,
  });
  console.log("Database connected!");
}

async function setupServer() {
  const typeDefs = gql`
    type Query {
      hello: String
    }
  `;

  const resolvers = {
    Query: {
      hello: () => {
        return "Hello World!";
      },
    },
  };

  const app = new ApolloServer({ typeDefs, resolvers });
  const { url } = await app.listen({ port: process.env.PORT });
  console.log('Server running on:', url);
}

export async function setup() {
  await setupDatabase();
  await setupServer();
}
