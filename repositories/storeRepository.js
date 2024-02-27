import { connection } from "../database.js";

const getAllStores = async () => {
  const [results] = await connection.query("SELECT * FROM stores");
  return results;
};

const getStoreById = async (storeId) => {
  const [results] = await connection.query(
    `SELECT * FROM stores WHERE id = '${storeId}'`
  );
  return results;
};

const createStore = async (newStore) => {
  const columns = Object.keys(newStore);
  const [results] = await connection.query(
    `INSERT INTO stores (${columns.map(
      (column) => column
    )}) VALUES (${columns.map((column) => `'${newStore[column]}'`)})`
  );
  return results;
};

const editStore = async (updatedStore) => {
  const columns = Object.keys(updatedStore);
  const [results] = await connection.query(
    `UPDATE stores SET ${columns.map(
      (column) => `${column} = "${updatedStore[column]}" `
    )} WHERE id = ${updatedStore.id};`
  );
  return results;
};

const deletedStore = async (storeId) => {
  const deletedStore = await connection.query(
    `DELETE FROM stores WHERE id = ${storeId}`
  );
  return deletedStore;
};

export default {
  createStore,
  deletedStore,
  editStore,
  getAllStores,
  getStoreById,
};
