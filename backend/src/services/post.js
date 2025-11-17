import * as PostModel from "../models/post.js";

export const getAllPosts = async () => {
  const posts = await PostModel.getAllPosts();
  return posts;
};

export const getPost = async (id) => {
   const post = await PostModel.getPost(id);
    return post;
};

export const create = async (post) => {
   await PostModel.create(post);
};

export const deletePost = async (id) => {
   await PostModel.deletePost(id);
}

export const update = async (post) => {
   await PostModel.update(post);
}