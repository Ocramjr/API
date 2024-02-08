// import { users } from "../mock/users.js";
import { connection } from "../database.js";

const getAllUsers = async () => {
  const [results] = await connection.query("SELECT * FROM `user`");
  return results;
};

const getUserById = async (userId) => {
  const [results] = await connection.query(
    `SELECT * FROM user WHERE id = ${userId}`
  );
  return results;
};

const getUserByEmail = async (userEmail) => {
  const [results] = await connection.query(
    `SELECT * FROM user WHERE email = ${userEmail}`
  );
  return results;
};

const getUserByCpf = async (userCpf) => {
  const [results] = await connection.query(
    `SELECT * FROM user WHERE cpf = ${userCpf}`
  );
  return results;
};

const createUser = async (newUser) => {
  const columns = Object.keys(newUser);
  const [results] = await connection.query(
    `INSERT INTO user (${columns.map(
      (column) => column
    )}) VALUES (${columns.map((column) => `'${newUser[column]}'`)})`
  );
  return results;
};

const editUser = (updatedUser) => {
  const index = users.findIndex((user) => user.id === updatedUser.id);
  users[index] = updatedUser;
  return updatedUser;
};

const deletedUser = async (userId) => {
  const [results] = await connection.query(
    `DELETE FROM user WHERE id = ${userId}`
  );
  return results;
};

export default {
  editUser,
  createUser,
  deletedUser,
  getUserById,
  getUserByCpf,
  getAllUsers,
  getUserByEmail,
};
