import { ApolloServer } from "@apollo/server";
import { gql } from "graphql-tag";

const resolvers = {
  Query: {
    hello: () => {
      return "Hello World!";
    },
  },
};

const typeDefs = gql`
  type Query {
    hello: String
  }
`;

async function createGraphQLServer() {
  // Create GraphQL Server
  const gqlServer = new ApolloServer({
    typeDefs,
    resolvers,
  });

  // Start GraphQL Server
  await gqlServer.start();

  return gqlServer;
}

export default createGraphQLServer;
