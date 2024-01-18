import productRepository from "../repositories/productRepository.js";

const getAllProducts = () => productRepository.getAllProducts();
const getProductById = (productId) =>
  productRepository.getProductById(productId);
const createProduct = (newProduct) =>
  productRepository.createProduct(newProduct);
const deletedProduct = (productId) =>
  productRepository.deletedProduct(productId);
const editProduct = (productId, updatedProduct) =>
  productRepository.editProduct({ id: productId, ...updatedProduct });

export {
  createProduct,
  deletedProduct,
  editProduct,
  getAllProducts,
  getProductById,
};
