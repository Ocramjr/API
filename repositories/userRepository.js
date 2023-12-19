import { v4 as uuidv4 } from "uuid";

const users = [
  {
    id: uuidv4(), // gerar na hora da criação e id único
    fullname: "Marco Antonio", // Obrigatório
    birthdate: new Date(),
    email: "email@gmail.com", // Obrigatório e único
    phone: "85999999999",
    cpf: "00000000000", // Obrigatório e 11 caracteres e único.
  },
];

const getAllUsers = () => users;

const getUserById = (userId) => users.find((user) => users.id === userId);

const getUserByEmail = (userEmail) =>
  users.find((user) => users.email === userEmail);

const getUserByCpf = (userCpf) => users.find((user) => user.cpf === userCpf);

const createUser = (newUser) => {
  users.push(newUser);
  return newUser;
};

const editUser = (updateUser) => {
  const index = users.findIndex((user) => user.id === updateUser.id);
  users[index] = updateUser;
  return updateUser;
};

const deleteUser = (deleteUser) => {
  const index = users.findIndex((user) => user.id === deleteUser.id);
  const deletedUser = users.splice(index, 1);
  return deletedUser;
};

export default {
  getAllUsers,
  getUserById,
  getUserByEmail,
  getUserByCpf,
  createUser,
  editUser,
  deleteUser,
};
