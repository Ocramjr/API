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
    res.status(200).json({
      data: users,
      mensagem: "Usuários encontrados com sucesso!",
    });
  }

  // return res.status(400).json({ mensagem: "Usuários não encontrados." });
};

const createNewUser = (req, res) => {
  const id = uuidv4();
  const userById = getUserById(id);
  const user = {
    id,
    stores: [],
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
    return res.status(201).json({
      data: newUser,
      mensagem: "Usuário criado com sucesso!",
    });
  }
};

const listAUser = async (req, res) => {
  const userId = req.params.id;

  if(!userId) {
    return res.status(400).json({ mensagem: "O Id é obrigatório." })
  }

  const user = await getUserById(userId);

  if(user) {
    return res.status(200).json({ data: user, mensagem: "Usuário encontrado com sucesso! "})
  }
}

const deleteAUser = async (req, res) => {
  const userId = req.params.id;

  if(!userId) {
    return res.status(400).json({ mensagem: "O Id é obrigatório." })
  }

  const user = await getUserById(userId);

  if(user.length === 0) {
    return res.status(400).json({ mensagem: "Usuário não encontrado!" })
  }

  const deleteUser = await deletedUser(userId);

  return res.status(200).json({ data: deleteUser, mensagem: "Usuário deletado com sucesso!" })

}

const editAUser = (req, res) =>{
  const userId = req.params.id;

  if(!userId) {
    return res.status(400).json({ mensagem: "O Id é obrigatório." })
  }

  const user = getUserById(userId);

  if(!user) {
    return res.status(400).json({ mensagem: "Usuário não encontrado!" })
  }

  const editedUser = editUser(userId, { ...user, ...req.body} );

  return res.status(200).json({ data: editedUser, mensagem: "Usuário editado com sucesso!" })
}

export { listAllUsers, createNewUser, listAUser, deleteAUser, editAUser };
