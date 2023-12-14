import userRepository from "../repositories/userRepository.js"

const getAllUsers = () => userRepository.getAllUsers;
const getUserById = (userId) => userRepository.getUserById;
const getUserByEmail = (userEmail) => userRepository.getUserByEmail;
const createUser = (newUser) => userRepository.createUser;
const deletedUser = (deleteUser) => userRepository.deleteUser;
const editUser = (userId, updateUser) => userRepository.editUser({ id: userId, ...updateUser });
