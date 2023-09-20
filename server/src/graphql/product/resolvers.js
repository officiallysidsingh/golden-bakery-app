import Product from "../../models/productModel.js";

export const resolvers = {
  Query: {
    getProductById: async (_, { ID }) => {
      return await Product.findById(ID);
    },
    getProductByNumber: async (_, { number }) => {
      return await Product.find().sort({ createdAt: 1 }).limit(number);
    },
  },
};
