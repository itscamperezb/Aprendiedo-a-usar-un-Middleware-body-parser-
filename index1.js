import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";
//esto es para poder encontrar la ruta de archivos que necesito para que el server halle los /public/index.html
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

//en este caso uso urlencoded ya que estoy trabajando con la información enviada en un forms,
//note: recuerda que el app.use va antes que cualquier otra https request
//sin esta linea de codigo no puedo hacer "req.body" ya que gracias a esta linea es que puedo
//recibir la información registrada en el form
app.use(bodyParser.urlencoded({ extended: true }));

//aca escribo "/submit" porque esa esa la ruta del form del archivo html
// app.post("/submit", (req, res) => {
//   console.log(req.body);
// });

app.get("/", (req, res) => {
  console.log(__dirname + "/public/index.html");
  res.sendFile(__dirname + "/public/index.html");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
