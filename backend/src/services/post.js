import * as PostModel from "../models/post.js";

export const getAllPosts = async (email) => {
  const posts = await PostModel.getAllPosts();
  return posts;
};
