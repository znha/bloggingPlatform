import express from "express";
const router = express.Router();

router.get("/login", (req, res) => {
  res.json({ status: "ok", uptime: process.uptime() });
});

router.get("/register", (req, res) => {
  res.json({ status: "ok", uptime: process.uptime() });
});

export default router;
