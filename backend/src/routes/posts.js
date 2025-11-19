import express from "express";
import * as Post from "../controllers/posts.js" 
import { postSchema } from '../validation/postSchema.js';
import { validate } from '../middleware/validate.js';
import { verifyToken } from '../middleware/auth.js';
const router = express.Router({ mergeParams: true });

router.get("/", Post.viewAll);
router.post("/create",verifyToken, validate(postSchema), Post.create);
router.get("/view/:id", Post.viewById);
router.put("/edit/:id", verifyToken, validate(postSchema), Post.edit);
router.delete("/remove/:id",verifyToken,  Post.remove);

export default router;  
