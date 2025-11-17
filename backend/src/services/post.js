import * as PostModel from "../models/post.js";

export const getAllPosts = async (email) => {
  const posts = await PostModel.getAllPosts();
  return posts;
};

export const getPost = async (id) => {
  const posts = await PostModel.getPost(id);
  return posts;
};

export const create = async (post) => {
   await PostModel.create(post);
};
