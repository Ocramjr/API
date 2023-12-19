import { v4 as uuidv4 } from "uuid";
import {
  createUser,
  getAllUsers,
  getUserByCpf,
  getUserByEmail,
  getUserById,
} from "../services/usersService.js";

const listAllProducts = (req, res) => {
  const users = getAllUsers();
  if (users.length === 0) {
    return res.status(200).json({
      mensagem: "Não há usuários cadastrados!",
    });
  }

  if (users) {
    res.status(200).json({
      data: users,
      mensagem: "Usuários encontrados com sucesso!",
    });
  }

  return res.status(400).json({ mensagem: "Usuários não encontrados." });
};

const createNewUser = (req, res) => {
  const id = uuidv4();
  const userById = getUserById(id);
  const user = {
    id,
    ...req.body,
  };

  if (userById) {
    return res.status(400).json({ mensagem: "ID já cadastrado!" });
  }

  if (!user.fullname) {
    return res.status(400).json({ mensagem: "Nome do usuário obrigatório!" });
  }

  if (!user.email) {
    return res.status(400).json({ mensagem: "Email obrigatório" });
  }

  const userByEmail = getUserByEmail(user.email);

  if (userByEmail) {
    return res.status(400).json({ mensagem: "Email já cadastrado!" });
  }

  if (!user.cpf) {
    return res.status(400).json({ mensagem: "CPF obrigatório!" });
  }

  const userByCpf = getUserByCpf(user.cpf);

  if (userByCpf) {
    return res.status(400).json({ mensagem: "CPF já cadastrado!" });
  }

  if (user.cpf.length != 11) {
    return res.status(400).json({ mensagem: "CPF inválido!" });
  }

  const newUser = createUser(user);

  if (newUser) {
    return res.status(200).json({
      data: newUser,
      mensagem: "Usuário criado com sucesso!",
    });
  }
};

export { listAllProducts, createNewUser };
