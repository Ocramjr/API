import { v4 as uuidv4 } from "uuid";
import {
  createStore,
  deletedStore,
  editStore,
  getAllStores,
  getStoreById,
} from "../services/storesService.js";
import { getUserById } from "../services/usersService.js";

const listAllStores = async (req, res) => {
  const stores = await getAllStores();

  if (stores.length === 0) {
    return res.status(200).json({
      mensagem: "Não há lojas cadastradas!",
    });
  }

  if (stores) {
    return res.status(200).json({
      data: stores,
      mensagem: "Lojas encontradas com sucesso!",
    });
  }

  return res.status(400).json({ mensagem: "Lojas não encontradas" });
};

const listAStore = async (req, res) => {
  const storeId = req.params.id;

  if (!storeId) {
    return res.status(400).json({ mensagem: "O id é obrigatório" });
  }

  const store = await getStoreById(storeId);

  if (store.length > 0) {
    return res
      .status(200)
      .json({ data: store, mensagem: "Loja encontrada com sucesso!" });
  }

  return res.status(400).json({ mensagem: "ID não existe!" });
};

const deleteAStore = async (req, res) => {
  const storeId = req.params.id;

  if (!storeId) {
    return res.status(400).json({ mensagem: "O id é obrigatório!" });
  }

  const store = await getStoreById(storeId);

  if (store.length === 0) {
    return res.status(400).json({ mensagem: "A loja não foi encontrada!" });
  }

  const deleteStore = await deletedStore(storeId);

  return res
    .status(200)
    .json({ data: deleteStore, mensagem: "Loja deletada com sucesso!" });
};

const createANewStore = async (req, res) => {
  const user = await getUserById(req.body.userId);

  if (user.length === 0) {
    return res.status(400).json({ mensagem: "Usuário não encontrado!" });
  }

  const newStore = req.body;

  if (!newStore.email) {
    return res.status(400).json({ mensagem: "O e-mail é obrigatório!" });
  }

  if (!newStore.cnpj) {
    return res.status(400).json({ mensagem: "O CNPJ é obrigatório!" });
  }

  if (newStore.cnpj.length !== 14) {
    return res
      .status(400)
      .json({ mensagem: "O CNPJ precisa ter 14 caracteres!" });
  }

  if (!newStore.name) {
    return res.status(400).json({ mensagem: "O nome da loja é obrigatório!" });
  }

  const createdStore = await createStore(newStore);

  if (createdStore) {
    return res
      .status(201)
      .json({ data: createdStore, mensagem: "Loja criada com sucesso!" });
  }
};

const editAStore = async (req, res) => {
  const storeId = req.params.id;

  if (!storeId) {
    return res.status(400).json({ mensagem: "O ID da loja é obrigatório!" });
  }

  const store = await getStoreById(storeId);

  if (store.length === 0) {
    return res.status(400).json({ mensagem: "Loja não foi encontrada!" });
  }

  const editedStore = await editStore(store[0].id, {
    ...store[0],
    ...req.body,
  });

  if (editedStore.affectedRows > 0) {
    return res
      .status(200)
      .json({ data: editedStore, mensagem: "Loja editada com sucesso!" });
  }
};
export { listAllStores, listAStore, deleteAStore, createANewStore, editAStore };
