// import { users } from "../mock/users.js";
import { connection } from "../database.js";

const getAllUsers = async () => {
  const [results] = await connection.query("SELECT * FROM `users`");
  return results;
};

const getUserById = async (userId) => {
  const [results] = await connection.query(
    `SELECT * FROM users WHERE id = ${userId}`
  );
  return results;
};

const getUserByEmail = async (userEmail) => {
  const [results] = await connection.query(
    `SELECT * FROM users WHERE email = '${userEmail}'`
  );
  return results;
};

const getUserByCpf = async (userCpf) => {
  const [results] = await connection.query(
    `SELECT * FROM users WHERE cpf = ${userCpf}`
  );
  return results;
};

const createUser = async (newUser) => {
  const columns = Object.keys(newUser);
  const [results] = await connection.query(
    `INSERT INTO users (${columns.map(
      (column) => column
    )}) VALUES (${columns.map((column) => `'${newUser[column]}'`)})`
  );
  return results;
};

const editUser = async (updatedUser) => {
  const columns = Object.keys(updatedUser);
  const [results] = await connection.query(
    `UPDATE users SET ${columns.map(
      (column) => `${column} = "${updatedUser[column]}" `
    )} WHERE id = ${updatedUser.id};`
  );
  return results;
};

const deletedUser = async (userId) => {
  const [results] = await connection.query(
    `DELETE FROM users WHERE id = ${userId}`
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
