import { Router } from "express";
import {
  createNewUser,
  listAllUsers,
  listAUser,
  deleteAUser,
  editAUser,
  listAUserByCpf,
  listAUserByEmail,
} from "../controllers/usersController.js";

const usersRoutes = Router();

usersRoutes.get("/users/:id", listAUser);
usersRoutes.get("/users/email/:email", listAUserByEmail);
usersRoutes.get("/users/cpf/:cpf", listAUserByCpf);
usersRoutes.get("/users", listAllUsers);
usersRoutes.post("/users", createNewUser);
usersRoutes.delete("/users/:id", deleteAUser);
usersRoutes.patch("/users/:id", editAUser);

export default usersRoutes;
