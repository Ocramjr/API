import { v4 as uuidv4 } from "uuid";
import {
  createUser,
  deletedUser,
  editUser,
  getAllUsers,
  getUserByCpf,
  getUserByEmail,
  getUserById,
} from "../services/usersService.js";

const listAllUsers = async (req, res) => {
  const users = await getAllUsers();

  if (users.length === 0) {
    return res.status(200).json({
      mensagem: "Não há usuários cadastrados!",
    });
  }

  if (users) {
    return res.status(200).json({
      data: users,
      mensagem: "Usuários encontrados com sucesso!",
    });
  }

  return res.status(400).json({ mensagem: "Usuários não encontrados." });
};

const createNewUser = async (req, res) => {
  const user = req.body;

  if (!user.name) {
    return res.status(400).json({ mensagem: "Nome do usuário obrigatório!" });
  }

  if (!user.email) {
    return res.status(400).json({ mensagem: "Email obrigatório" });
  }

  const userByEmail = await getUserByEmail(user.email);

  if (userByEmail.length > 0) {
    return res.status(400).json({ mensagem: "Email já cadastrado!" });
  }

  if (!user.cpf) {
    return res.status(400).json({ mensagem: "CPF obrigatório!" });
  }

  if (user.cpf.length != 11) {
    return res.status(400).json({ mensagem: "CPF inválido!" });
  }

  const userByCpf = await getUserByCpf(user.cpf);

  if (userByCpf.length > 0) {
    return res.status(400).json({ mensagem: "CPF já cadastrado!" });
  }

  const newUser = await createUser(user);

  if (newUser) {
    return res.status(201).json({
      data: newUser,
      mensagem: "Usuário criado com sucesso!",
    });
  }
};

const listAUser = async (req, res) => {
  const userId = req.params.id;

  if (!userId) {
    return res.status(400).json({ mensagem: "O Id é obrigatório." });
  }

  const user = await getUserById(userId);

  if (user) {
    return res
      .status(200)
      .json({ data: user, mensagem: "Usuário encontrado com sucesso! " });
  }
};

const listAUserByEmail = async (req, res) => {
  const userEmail = req.params.email;

  if (!userEmail) {
    return res.status(400).json({ mensagem: "O e-mail é obrigatório" });
  }

  const user = await getUserByEmail(userEmail);

  if (user) {
    return res
      .status(200)
      .json({ data: user, mensagem: "Usuário encontrado com sucesso!" });
  }
};

const listAUserByCpf = async (req, res) => {
  const userCpf = req.params.cpf;

  if (!userCpf) {
    return res.status(400).json({ mensagem: "O CPF é obrigatório" });
  }

  const user = await getUserByCpf(userCpf);

  if (user) {
    return res
      .status(200)
      .json({ data: user, mensagem: "Usuário encontrado com sucesso!" });
  }
};

const deleteAUser = async (req, res) => {
  const userId = req.params.id;

  if (!userId) {
    return res.status(400).json({ mensagem: "O Id é obrigatório." });
  }

  const user = await getUserById(userId);

  if (user.length === 0) {
    return res.status(400).json({ mensagem: "Usuário não encontrado!" });
  }

  const deleteUser = await deletedUser(userId);

  return res
    .status(200)
    .json({ data: deleteUser, mensagem: "Usuário deletado com sucesso!" });
};

const editAUser = (req, res) => {
  const userId = req.params.id;

  if (!userId) {
    return res.status(400).json({ mensagem: "O Id é obrigatório." });
  }

  const user = getUserById(userId);

  if (!user) {
    return res.status(400).json({ mensagem: "Usuário não encontrado!" });
  }

  const editedUser = editUser(userId, { ...user, ...req.body });

  return res
    .status(200)
    .json({ data: editedUser, mensagem: "Usuário editado com sucesso!" });
};

export {
  listAllUsers,
  createNewUser,
  listAUser,
  deleteAUser,
  editAUser,
  listAUserByEmail,
  listAUserByCpf,
};
