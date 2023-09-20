import Product from "../models/productModel.js";

// GraphQL Imports
import { GraphQLError } from "graphql";

// GetProduct By Its ID And Return
export async function getProductById(ID) {
  const product = await Product.findById(ID);
  return product;
}

// Get Products By Given No. Of Products And Return
export async function getProductByNumber(number) {
  const product = await Product.find().sort({ createdAt: 1 }).limit(number);
  return product;
}

// Create A New Product Entry
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

// Delete A Product Entry By Its ID
export async function deleteProduct(ID) {
  // Check If Product With ID Exists
  const product = await Product.findById(ID);

  // If Product Doesn't Exist
  if (!product) {
    throw new GraphQLError("The Entered ID Doesn't Exist", {
      extensions: {
        code: "NOT_FOUND",
        http: {
          status: 404,
        },
      },
    });
  }

  // Else Delete The Product
  const deletedProduct = await Product.findByIdAndDelete(ID);

  // Return 1 if Product is Deleted Successfully
  // Else Return 0
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
        code: "NOT_FOUND",
        http: {
          status: 404,
        },
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
