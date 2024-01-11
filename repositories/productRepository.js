import { stores } from "../mock/products.js";

const getAllProducts = () => products;

const getProductById = (productId) => products.find((product) => product.id === productId);

const createProduct = (newProduct) => {
  products.push(newProduct);
  return newProduct;
};

const editProduct = (updatedProduct) => {
  const index = products.findIndex((product) => product.id === updatedProduct.id);
  stores[index] = updatedProduct;
  return updatedProduct;
};

const deletedProduct = (productId) => {
  const index = product.findIndex((product) => product.id === productId);
  const deletedProduct = products.splice(index, 1);
  return deletedProduct;
};

export default {
    getAllProducts,
    getProductById,
    createProduct,
    editProduct,
    deletedProduct,
};