import { Router } from "express";
import { createAProduct, deleteAProduct, listAProduct, listAllProducts } from "../controllers/productsController.js";

const productsRouter = Router();

productsRouter.get("/products", listAllProducts);
productsRouter.get("/products/:id", listAProduct);
productsRouter.delete("/products/:id", deleteAProduct);
productsRouter.post("/products", createAProduct);
// storesRouter.patch("/stores/:id", editAStore);

export default productsRouter;
