import { stores } from "../mock/stores.js";

const getAllStores = () => stores;

const getStoreById = (storeId) => stores.find((store) => store.id === storeId);

const createStore = (newStore) => {
  stores.push(newStore);
  return newStore;
};

const editStore = (updatedStore) => {
  const index = stores.findIndex((store) => store.id === updatedStore.id);
  stores[index] = updatedStore;
  return updatedStore;
};

const deletedStore = (storeId) => {
  const index = stores.findIndex((store) => store.id === storeId);
  const deletedStore = stores.splice(index, 1);
  return deletedStore;
};

export default {
  createStore,
  deletedStore,
  editStore,
  getAllStores,
  getStoreById,
};