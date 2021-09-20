import express from "express";
import router from "./routes/index.js";

const app = express();

const port = process.env.PORT || 3000;

// Habilitar PUG
app.set("view engine", "pug");

// Obtener el año actualizar
app.use((req, res, next) => {
  const year = new Date();
  res.locals.actualYear = year.getFullYear();
  next();
});

app.use(express.static("public"));

// Agregamos Router mediante 'use' (soporta los diferentes verbos http)
app.use("/", router);

app.listen(port, () => {
  console.log("Server ON");
});
