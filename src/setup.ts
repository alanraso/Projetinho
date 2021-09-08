import { createConnection } from "typeorm";
import { ApolloServer, gql } from 'apollo-server';

async function setupDatabase() {
  await createConnection({
    type: "postgres",
    url: "postgres://pick_a_username:pick_a_password@localhost:5432/pick_a_db_name",
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
  const { url } = await app.listen();
  console.log(`Server running on ${url}`);
}

export async function setup() {
  await setupDatabase();
  await setupServer();
}
