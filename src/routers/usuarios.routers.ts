import { Router } from "express";
import { getAllusuario } from "../controllers/usuarios.controller.ts";

const ruta = Router();
ruta.get("/consultorios", getAllusuario);

export default ruta;
