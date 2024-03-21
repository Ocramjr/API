import express from "express";
import usersRoutes from "./routes/users.js";
import storesRouter from "./routes/stores.js";
import productsRouter from "./routes/products.js";

export const app = express();

const port = 3000;

app.use(express.json());

app.use(usersRoutes);
app.use(storesRouter);
app.use(productsRouter);

app.listen(port, () => {
  console.log(`Servidor rodando na porta: ${port}`);
});
