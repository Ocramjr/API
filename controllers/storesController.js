import { v4 as uuidv4 } from "uuid";
import { createStore, deletedStore, getAllStores, getStoreById } from "../services/storesService.js";
import { getUserById } from "../services/usersService.js";

const listAllStores = (req, res) => {
  const stores = getAllStores();

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

const listAStore = (req, res) => {
  const storeId = req.params.id;

  if (!storeId) {
    return res.status(400).json({ mensagem: "O id é obrigatório" });
  }

  const store = getStoreById(storeId);

  if (store) {
    return res
      .status(200)
      .json({ data: store, mensagem: "Loja encontrada com sucesso!" });
  }
};

const deleteAStore = (req, res) => {
  const storeId = req.params.id;

  if(!storeId) {
    return res.status(400).json({ mensagem: "O Id é obrigatório." })
  }

  const store = getStoreById(storeId);

  if(!store) {
    return res.status(400).json({ mensagem: "Store não encontrado!" })
  }

  const deleteStore = deleteStore(storeId)

  return res.status(200).json({ data: deletedStore, mensagem: "Store deletado com sucesso!" })
};

const createANewStore = (req, res) => {
  const id = uuidv4();
  const storeById = getStoreById(id);

  if (storeById) {
    return res.status(400).json({ mensagem: "Loja já cadastrada!" });
  }

  const user = getUserById(req.body.userId)

  if (!user) {
    return res.status(400).json( {mensagem: "Usuário não encontrado!"} )
  }
  const newStore = {
    id,
    ...req.body,
  };

  if (!newStore.name) {
    return res.status(400).json({ mensagem: "Nome da store obrigatória!" });
  }

  if (!newStore.email) {
    return res.status(400).json({ mensagem: "Email obrigatório" });
  }

  if (!newStore.cnpj) {
    return res.status(400).json({ mensagem: "CNPJ obrigatório!" });
  }

  if (newStore.cnpj.length !== 14) {
    return res.status(400).json({ mensagem: "Cnpj inválido!" });
  }

  const aNewStore = createStore(newStore);

  if (aNewStore) {
    return res.status(201).json({
      data: aNewStore,
      mensagem: "Loja criada com sucesso!",
    });
  }
};
const editAStore = (req, res) => {};

export { listAllStores, listAStore, deleteAStore, createANewStore };