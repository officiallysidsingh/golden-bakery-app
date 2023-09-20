import Product from "../models/productModel.js";

// GraphQL Imports
import { GraphQLError } from "graphql";

export async function getProductById(ID) {
  const product = await Product.findById(ID);
  return product;
}

export async function getProductByNumber(number) {
  const product = await Product.find().sort({ createdAt: 1 }).limit(number);
  return product;
}

export async function createProduct(name, description, price, photoUrl) {
  const createdProduct = Product.create({
    name,
    description,
    price,
    photoUrl,
    createdAt: new Date().toISOString(),
  });
  return createdProduct;
}

export async function deleteProduct(ID) {
  const deletedProduct = await Product.findByIdAndDelete(ID);
  if (deletedProduct) {
    return 1;
  } else {
    return 0;
  }
}

export async function editProduct(ID, name, description, price, photoUrl) {
  // Check If Product With ID Exists
  const product = await Product.findById(ID);

  // If Product Doesn't Exist
  if (!product) {
    throw new GraphQLError("The Entered ID Doesn't Exist", {
      extensions: {
        code: "BAD_USER_INPUT",
      },
    });
  }

  // Else Update The Product
  await Product.findByIdAndUpdate(
    ID,
    { name, description, price, photoUrl },
    { new: false }
  );

  // Return Updated Product
  const updatedProduct = Product.findById(ID);
  return updatedProduct;
}
