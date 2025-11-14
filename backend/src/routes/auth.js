import express from "express";
import * as User from "../controllers/user.js" 
const router = express.Router();

router.post("/login", User.login);

router.post("/register",User.register);

export default router;
