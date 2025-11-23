import express from "express";
import morgan from "morgan";

const app = express();
const port = 3000;

//esta linea es para usar "morgan" como middleware, en este caso usamos morgan porque este es
//para logging information (con esto me refiero a que este middleware es capaz de console.log la información de la request)
//al revisar la documentación de morgan, "combined" no es mas que un formato preestablecido de como quiero
//que la información se muestre en la consola. otro formato podria ser "tiny", si quieres ver todos los formatos revisa la documentación de morgan
app.use(morgan("tiny"));

app.post("/submit", (req, res) => {
  console.log(req.morgan);
});
app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
