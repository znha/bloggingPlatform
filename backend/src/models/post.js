import { prisma } from "../../prisma/client.js";

export const getAllPosts = async () => {
  const posts = await prisma.post.findMany();
  return posts;
};

export const createPost = async (post) => await prisma.post.create({ data: post });

