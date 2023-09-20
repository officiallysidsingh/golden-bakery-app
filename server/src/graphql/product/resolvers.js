import {
  getProductById,
  getProductByNumber,
  createProduct,
  deleteProduct,
  editProduct,
} from "../../services/productService.js";

export const resolvers = {
  Query: {
    getProductById: async (_, { ID }) => {
      let product = await getProductById(ID);
      return product;
    },
    getProductByNumber: async (_, { number }) => {
      let product = await getProductByNumber(number);
      return product;
    },
  },
  Mutation: {
    createProduct: async (
      _,
      { productInput: { name, description, price, photoUrl } }
    ) => {
      let createdProduct = await createProduct(
        name,
        description,
        price,
        photoUrl
      );
      return createdProduct;
    },
    deleteProduct: async (_, { ID }) => {
      let isProductDeleted = await deleteProduct(ID);
      return isProductDeleted;
    },
    editProduct: async (
      _,
      { ID, editProductInput: { name, description, price, photoUrl } }
    ) => {
      let updatedProduct = await editProduct(
        ID,
        name,
        description,
        price,
        photoUrl
      );
      return updatedProduct;
    },
  },
};
