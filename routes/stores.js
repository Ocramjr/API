import { Router } from "express";
import { listAStore, listAllStores, deleteAStore, createANewStore } from "../controllers/storesController.js";

const storesRouter = Router();

storesRouter.get("/stores", listAllStores);
storesRouter.get("/stores/:id", listAStore);
storesRouter.delete("/stores/:id", deleteAStore);
storesRouter.post("/stores", createANewStore);

export default storesRouter;