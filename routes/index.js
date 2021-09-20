import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.render("inicio");
});

router.get("/Nosotros", (req, res) => {
  res.render("nosotros");
});

export default router;
