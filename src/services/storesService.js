import storeRepository from "../repositories/storeRepository.js";

const getAllStores = async () => await storeRepository.getAllStores();
const getStoreById = async (storeId) =>
  await storeRepository.getStoreById(storeId);
const createStore = async (newStore) =>
  await storeRepository.createStore(newStore);
const deletedStore = async (storeId) =>
  await storeRepository.deletedStore(storeId);
const editStore = async (storeId, updatedStore) =>
  await storeRepository.editStore({ id: storeId, ...updatedStore });

// const addProductToAStore = (storeId, product) => {
//   const store = getStoreById(storeId);
//   store.products.push(product);
// };

export { getAllStores, getStoreById, createStore, deletedStore, editStore };
