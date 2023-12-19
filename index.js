import express from "express";
import usersRoutes from "./routes/users.js";

const app = express();

const port = 3000;

app.use(express.json());

app.use(usersRoutes);

app.listen(port, () => {
  console.log(`Servidor rodando na porta: ${port}`);
});
