import userRepository from "../repositories/userRepository.js";

const getAllUsers = async () => await userRepository.getAllUsers();
const getUserById = async (userId) => await userRepository.getUserById(userId);
const getUserByEmail = async (userEmail) =>
  await userRepository.getUserByEmail(userEmail);
const getUserByCpf = async (userCpf) =>
  await userRepository.getUserByCpf(userCpf);
const createUser = async (newUser) => await userRepository.createUser(newUser);
const deletedUser = async (userId) => await userRepository.deletedUser(userId);
const editUser = async (userId, updateUser) =>
  await userRepository.editUser({ id: userId, ...updateUser });
const addStoreToAUser = (userId, store) => {
  const user = getUserById(userId);
  user.stores.push(store);
};

export {
  getAllUsers,
  getUserById,
  getUserByEmail,
  getUserByCpf,
  createUser,
  deletedUser,
  editUser,
  addStoreToAUser,
};
