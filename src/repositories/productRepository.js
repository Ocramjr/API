import { connection } from "../database.js";

const getAllProducts = async () => {
  const [results] = await connection.query("SELECT * FROM products");
  return results;
};

const getProductById = async (productId) => {
  const [results] = await connection.query(
    `SELECT * FROM products WHERE id = '${productId}'`
  );
  return results;
};

const createProduct = async (newProduct) => {
  const columns = Object.keys(newProduct);
  const [results] = await connection.query(
    `INSERT INTO products (${columns.map(
      (column) => column
    )}) VALUES (${columns.map((column) => `'${newProduct[column]}'`)})`
  );
  return results;
};

const editProduct = async (updatedProduct) => {
  const columns = Object.keys(updatedProduct);
  const [results] = await connection.query(
    `UPDATE products SET ${columns.map(
      (column) => `${column} = "${updatedProduct[column]}" `
    )} WHERE id = ${updatedProduct.id};`
  );
  return results;
};

const deletedProduct = async (productId) => {
  const deletedStore = await connection.query(
    `DELETE FROM products WHERE id = ${productId}`
  );
  return deletedStore;
};

export {
  getAllProducts,
  getProductById,
  createProduct,
  editProduct,
  deletedProduct,
};
