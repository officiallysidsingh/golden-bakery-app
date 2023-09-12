import { gql } from "@apollo/client";

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