import { ApolloServer } from "@apollo/server";
import { Product } from "./product/index.js";

async function createGraphQLServer() {
  // Create GraphQL Server
  const gqlServer = new ApolloServer({
    typeDefs: Product.typeDefs,
    resolvers: Product.resolvers,
  });

  // Start GraphQL Server
  await gqlServer.start();

  return gqlServer;
}

export default createGraphQLServer;
