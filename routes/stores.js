import { Router } from "express";
import { listAStore, listAllStores, deleteAStore, createANewStore, editAStore } from "../controllers/storesController.js";

const storesRouter = Router();

storesRouter.get("/stores", listAllStores);
storesRouter.get("/stores/:id", listAStore);
storesRouter.delete("/stores/:id", deleteAStore);
storesRouter.post("/stores", createANewStore);
storesRouter.patch("/stores/:id", editAStore);

export default storesRouter;
