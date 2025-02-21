import dot from "dotenv";
import express from "express";
import { usuariosRouters }  from "./routers/index.ts"; 

dot.config({ path: "/home/taller4N/usuarios/src/.env" });

const app = express();
const port = process.env.PORT || 3002; 

app.get("/", (req, res) => {
  res.send("Hola Usuarios");
});

app.use("/usuarios", usuariosRouters);

app.listen(port, () => {
  console.log(`Servidor corriendo en: http://localhost:${port}`);
});
