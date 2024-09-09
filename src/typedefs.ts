export const typeDefs = `#graphql
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
