import { Router } from "express";
import {
  createNewUser,
  listAllUsers,
  listAUser,
  deleteAUser,
  editAUser,

} from "../controllers/usersController.js";

const usersRoutes = Router();


usersRoutes.get("/users/:id", listAUser);
usersRoutes.get("/users", listAllUsers);
usersRoutes.post("/users", createNewUser);
usersRoutes.delete("/users/:id", deleteAUser)
usersRoutes.patch("/users/:id", editAUser)

export default usersRoutes;
