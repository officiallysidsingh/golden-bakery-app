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
  Mutation: {
    createProduct: async (
      _,
      { productInput: { name, description, price, photoUrl } }
    ) => {
      const product = Product.create({
        name,
        description,
        price,
        photoUrl,
        createdAt: new Date().toISOString(),
      });
      return product;
    },
    deleteProduct: async (_, { ID }) => {
      const deletedProduct = await Product.findByIdAndDelete(ID);
      if (deletedProduct) {
        return `Deleted Entry With ID: ${ID}`;
      } else {
        return `Entry With Given ID Can't Be Found`;
      }
    },
  },
};
