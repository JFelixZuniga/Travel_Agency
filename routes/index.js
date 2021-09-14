import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Inicio");
});

router.get("/Nosotros", (req, res) => {
  res.render("nosotros");
});

export default router;
