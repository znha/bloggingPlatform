import express from "express";
import * as User from "../controllers/user.js" 
import { validate } from '../middleware/validate.js';
import { loginSchema, registerSchema } from '../validation/authSchema.js';

const router = express.Router();

router.post("/login",validate(loginSchema), User.login);

router.post("/register",validate(registerSchema),User.register);

export default router;
