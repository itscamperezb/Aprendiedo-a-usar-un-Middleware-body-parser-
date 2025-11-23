import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";
import morgan from "morgan";
const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;

var BandName1 = "";
var BandName2 = "";
var BandName3 = "";
var BandName4 = "";
app.use(morgan("tiny"));
app.use(bodyParser.urlencoded({ extended: true }));

function bandNameGenerator(req, res, next) {
  console.log(req.body);
  console.log(req.morgan);
  //street y pet son los nombres de los labels en el html donde vamos a ingresar la info del form
  BandName1 = req.body["street"] + req.body["pet"];
  BandName2 = BandName1.slice(0, 1).toUpperCase();
  BandName4 = BandName1.slice(1, BandName1.length).toLowerCase();
  BandName3 = BandName2 + BandName4;
  next();
}

app.use(bandNameGenerator);
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit", (req, res) => {
  res.send("<h1> tu BandName es:</h1> <h2>" + BandName3 + "😁</h2>");
  console.log(req.body);
  console.log(req.morgan);
});
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
