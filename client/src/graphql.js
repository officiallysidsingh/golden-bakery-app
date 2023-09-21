import { gql } from "@apollo/client";

// Fetching Individual Product Based On Its ID
export const GET_PRODUCT_BY_ID = gql`
  query SingleProduct($id: ID!) {
    getProductById(ID: $id) {
      id
      photoUrl
      name
      price
      description
    }
  }
`;

// Fetching Products By Number Of Products
export const GET_PRODUCTS_BY_NUMBER = gql`
  query AllProducts {
    getProductByNumber {
      id
      photoUrl
      name
      price
      description
    }
  }
`;
