import { Router } from "express";
import { createAProduct, deleteAProduct, editAProduct, listAProduct, listAllProducts, listProductCost, listProductsCost } from "../controllers/productsController.js";

const productsRouter = Router();

productsRouter.get("/products", listAllProducts);
productsRouter.get("/products/:id", listAProduct);
productsRouter.delete("/products/:id", deleteAProduct);
productsRouter.post("/products", createAProduct);
productsRouter.patch("/products/:id", editAProduct);
productsRouter.get("/productCost/:id", listProductCost);
productsRouter.get("/products-costs", listProductsCost);

export default productsRouter;
