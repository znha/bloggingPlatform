// services/userService.js
import * as UserModel from "../models/user.js";

export const checkUserExists = async (email) => {
  const exists = await getUser(email);
  return exists;
};

export const getUser = async (email) => {
  const user = await UserModel.findUserByEmail(email);
  return user;
};

export const registerUser = async (userData) => {
  const newUser = await UserModel.createUser(userData);
  return newUser;
};

export const loginUser = async (userData) => {};
