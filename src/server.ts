import { gql, ApolloServer } from "apollo-server";

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
app.listen().then(({ url }) => console.log(`Server url: ${url}`));
