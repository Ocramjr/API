import { products } from "../mock/products.js";

const getAllProducts = () => products;

const getProductById = (productId) =>
  products.find((product) => product.id === productId);

const createProduct = (newProduct) => {
  products.push(newProduct);
  return newProduct;
};

const editProduct = (updatedProduct) => {
  const index = products.findIndex(
    (product) => product.id === updatedProduct.id
  );
  products[index] = updatedProduct;
  return updatedProduct;
};

const deletedProduct = (productId) => {
  const index = products.findIndex((product) => product.id === productId);
  const deletedProduct = products.splice(index, 1);
  return deletedProduct;
};

export {
  getAllProducts,
  getProductById,
  createProduct,
  editProduct,
  deletedProduct,
};
