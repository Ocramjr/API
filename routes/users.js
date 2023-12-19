import { Router } from "express";
import {
  createNewUser,
  listAllProducts,
} from "../controllers/usersController.js";

const usersRoutes = Router();

usersRoutes.get("/users", listAllProducts);

usersRoutes.post("/users", createNewUser);

export default usersRoutes;
