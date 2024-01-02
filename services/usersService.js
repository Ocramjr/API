import userRepository from "../repositories/userRepository.js";

const getAllUsers = () => userRepository.getAllUsers();
const getUserById = (userId) => userRepository.getUserById(userId);
const getUserByEmail = (userEmail) => userRepository.getUserByEmail(userEmail);
const getUserByCpf = (userCpf) => userRepository.getUserByCpf(userCpf);
const createUser = (newUser) => userRepository.createUser(newUser);
const deletedUser = (userId) => userRepository.deletedUser(userId);
const editUser = (userId, updateUser) =>
  userRepository.editUser({ id: userId, ...updateUser });

export {
  getAllUsers,
  getUserById,
  getUserByEmail,
  getUserByCpf,
  createUser,
  deletedUser,
  editUser,
};
