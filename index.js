import express from "express";
import router from "./routes/index.js";

const app = express();

const port = process.env.PORT || 3000;

// Habilitar PUG
app.set("view engine", "pug");

// Agregamos Router mediante 'use' (soporta los diferentes verbos http)
app.use("/", router);

app.listen(port, () => {
  console.log("Server ON");
});
