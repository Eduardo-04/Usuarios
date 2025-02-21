//import { Request, Response } from "express";

export const getAllusuario = (req: any, res: any) => {
    res.status(200).json({
      mensaje: "Bienvenidos Usuarios",
    });
  };
  