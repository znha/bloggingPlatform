import { prisma } from "../../prisma/client.js";

export const findUserByEmail = async (email) => {
  const user = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });

  return user;
};

export const createUser = async (user) => await prisma.user.create({ data: user });

