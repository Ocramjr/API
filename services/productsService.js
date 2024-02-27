import * as productRepository from "../repositories/productRepository.js";

const getAllProducts = async () => await productRepository.getAllProducts();
const getProductById = async (productId) =>
  await productRepository.getProductById(productId);
const createProduct = async (newProduct) =>
  await productRepository.createProduct(newProduct);
const deletedProduct = async (productId) =>
  await productRepository.deletedProduct(productId);
const editProduct = async (productId, updatedProduct) =>
  await productRepository.editProduct({ id: productId, ...updatedProduct });
const getProductCost = async (product) => {
  const cost = Number(product.price) * Number(product.quantity);

  if (cost > 0) {
    return cost;
  }

  return 0;
};

const getProductsCosts = (products) => {
  const productsCosts = products.reduce((previous, current) => {
    const total = current.price * current.quantity;
    return previous + total;
  }, 0);

  return productsCosts;
};

export {
  createProduct,
  deletedProduct,
  editProduct,
  getAllProducts,
  getProductById,
  getProductCost,
  getProductsCosts,
};
