import { Router } from "express";
import { getAllusuario } from "../controllers/usuarios.controller.ts";

const ruta = Router();
ruta.get("/all", getAllusuario);

export default ruta;
