import Product from "../../models/productModel.js";

export const resolvers = {
  Query: {
    getProductById: async (_, { ID }) => {
      return await Product.findById(ID);
    },
  },
};
