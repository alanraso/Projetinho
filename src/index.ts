import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

interface UserInput {
  name: string;
  email: string;
  password: string;
  birthDate: string;
}

const typeDefs = `#graphql
type Query {
  hello: String
}

type Mutation {
  createUser(data: UserInput!): User!
}

input UserInput {
  name: String!
  email: String!
  password: String!
  birthDate: String!
}

type User {
  id: Int!
  name: String!
  email: String!
  birthDate: String!
}
`;

const resolvers = {
  Query: {
    hello: () => 'Hello World',
  },
  Mutation: {
    createUser: async (_, args: { data: UserInput }) => {
      console.log('args:', args);
      return {
        id: '1',
        email: 'admin@tatqile.com.br',
        name: 'Admin Taqtile',
        birthDate: '1990-01-01',
      };
    },
  },
};

await prisma.$connect();

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: +process.env.PORT },
});

console.log(`Server started at: ${url}`);
