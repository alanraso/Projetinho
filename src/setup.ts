import { ApolloServer, gql } from "apollo-server";
import { DataSource } from "typeorm";

async function connectedDb() {
  console.log(process.env.DATABASE_URL);
  const datasource = new DataSource({
    type: "postgres",
    url: process.env.DATABASE_URL,
  });

  await datasource.initialize();
  console.info("DB connected!");
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
  const { url } = await app.listen({ port: process.env.PORT })
  console.info(`Server running on: ${url}`);
}

export async function setup() {
  await connectedDb();
  await setupServer();
}
