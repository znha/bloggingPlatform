import { prisma } from "../../prisma/client.js";

export const getAllPosts = async () => {
  const posts = await prisma.post.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
  return posts;
};

export const getPost = async (id) => {
  const post = await prisma.post.findUnique({
    where: { id: id },
  });
  return post;
};

export const create = async (post) => await prisma.post.create({ data: post });

export const deletePost = async (id) =>
  await prisma.post.delete({ where: { id: id } });

export const update = async (post) =>
  await prisma.post.update({
    data: { title: post.title, content: post.content, updatedAt: new Date() },
    where: { id: post.id },
  });
