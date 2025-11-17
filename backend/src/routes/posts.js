import express from "express";
import * as Post from "../controllers/posts.js" 
import { postSchema } from '../validation/postSchema.js';
import { validate } from '../middleware/validate.js';

const router = express.Router();

router.get("/", Post.viewAll);
router.post("/create", validate(postSchema), Post.create);
router.get("/view/:id", Post.viewById);
// router.get("/edit/{id}", Post.edit);
// router.get("/remove/{id}", Post.remove);

export default router;  
