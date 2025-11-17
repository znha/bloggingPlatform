import express from "express";
import * as Post from "../controllers/posts.js" 

const router = express.Router();

router.get("/", Post.viewAll);
// router.get("/view/{id}", Post.viewById);
// router.get("/edit/{id}", Post.edit);
// router.get("/remove/{id}", Post.remove);
// router.get("/create", Post.create);

export default router;
