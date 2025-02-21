export const getAllusuario = (req: any, res: any) => {
  const usuarios = [
    {
      id: "1",
      nombre: "Dr. Ana Lopez",
      especialidad: "Neurologia"
    },
    {
      id: "2",
      nombre: "Dr. Juan José Osorio",
      especialidad: "Traumatologo"
    }
  ];

  res.status(200).json(usuarios);
};
