import {
  getProductById,
  getProductByNumber,
  createProduct,
} from "../../services/productService.js";
import Product from "../../models/productModel.js";

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
      const deletedProduct = await Product.findByIdAndDelete(ID);
      if (deletedProduct) {
        return `Deleted Entry With ID: ${ID}`;
      } else {
        return `Entry With Given ID Can't Be Found`;
      }
    },
    editProduct: async (
      _,
      { ID, editProductInput: { name, description, price, photoUrl } }
    ) => {
      await Product.findByIdAndUpdate(
        ID,
        { name, description, price, photoUrl },
        { new: false }
      );
      const updatedProduct = Product.findById(ID);
      return updatedProduct;
    },
  },
};
