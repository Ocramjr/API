import storeRepository from "../repositories/storeRepository.js";

const getAllStores = () => storeRepository.getAllStores();
const getStoreById = (storeId) => storeRepository.getStoreById(storeId);
const createStore = (newStore) => storeRepository.createStore(newStore);
const deletedStore = (storeId) => storeRepository.deletedStore(storeId);
const editStore = (storeId, updatedStore) =>
  storeRepository.editStore({ id: storeId, ...updatedStore });

export { getAllStores, getStoreById, createStore, deletedStore, editStore };