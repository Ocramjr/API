import userRepository from "../repositories/userRepository.js";

const getAllUsers = () => userRepository.getAllUsers();
const getUserById = (userId) => userRepository.getUserById(userId);
const getUserByEmail = (userEmail) => userRepository.getUserByEmail(userEmail);
const getUserByCpf = (userCpf) => userRepository.getUserByCpf(userCpf);
const createUser = (newUser) => userRepository.createUser(newUser);
const deletedUser = (userId) => userRepository.deletedUser(userId);
const editUser = (userId, updateUser) =>
  userRepository.editUser({ id: userId, ...updateUser });
const addStoreToUser = (userId, store) => {
  const user = getUserById(userId);
  user.stores.push(store);

} 

export {
  getAllUsers,
  getUserById,
  getUserByEmail,
  getUserByCpf,
  createUser,
  deletedUser,
  editUser,
  addStoreToUser,
};
