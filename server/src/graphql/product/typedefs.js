import { gql } from "graphql-tag";

export const typeDefs = gql`
  type Product {
    id: String!
    name: String!
    description: String!
    price: String!
    photoUrl: String!
  }

  input ProductInput {
    name: String!
    description: String!
    price: String!
    photoUrl: String!
  }

  input EditProductInput {
    name: String
    description: String
    price: String
    photoUrl: String
  }

  type Query {
    getProductById(ID: ID!): Product!
    getProductByNumber(number: Int): [Product]
  }

  type Mutation {
    createProduct(productInput: ProductInput!): Product!
    deleteProduct(ID: ID!): String!
    editProduct(ID: ID!, editProductInput: EditProductInput!): Product!
  }
`;
