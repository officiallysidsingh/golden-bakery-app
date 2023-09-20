import Product from "../models/productModel.js";

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
