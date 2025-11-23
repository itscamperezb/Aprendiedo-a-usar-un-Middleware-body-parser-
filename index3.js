import express from "express";

const app = express();
const port = 3000;

//haciendo esta función acabo de crear mi propio logging middleware, con los console.log estoy imprimiendo la onfor del method y la url
// y con el next hago que se ejecute la función  justo en la siguiente linea
function logger(req, res, next) {
  console.log("Request method: ", req.method);
  console.log("Request url: ", req.url);

  next();
}
//este app.use(logger) debe estar justo debajo de la function logger ya que esta al usar next() hace que la función se ejecute justo con
//la siguiente linea de codigo
app.use(logger);

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
