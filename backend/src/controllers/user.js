import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import * as UserService from "../services/user.js";

export const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) throw new Error("Missing fields");

    const userExists = await UserService.checkUserExists(email);
    if (userExists) throw new Error("Email already in use");

    const hashed = await bcrypt.hash(password, 10);
    const user = { name: name, email: email, password: hashed };
    await UserService.registerUser(user);
    const payload = { sub: user.id, email: user.email };
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "15m",
    });
    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "Strict",
      maxAge: 3600000, // 1 hour
    });

    res.status(201).json({
      msg: "User created",
      user: {
        name: user.name,
        email: user.email,
        createdAt: user.createdAt,
        id: user.id,
      },
      token: token,
    });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) throw new Error("Missing fields");

    const user = await UserService.getUser(email);
    if (!user) throw new Error("User Doesn't Exist");

    const valid = await bcrypt.compare(password, user.password);
    if (!valid) throw new Error("Invalid credentials");

    const payload = { sub: user.id, email: user.email };
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "15m",
    });
    const refreshToken = jwt.sign(
      { sub: user.id },
      process.env.REFRESH_SECRET,
      {
        expiresIn: "7d",
      }
    );
    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "Strict",
      maxAge: 3600000, // 1 hour
    });

    res.json({
      msg: "Login success",
      user: {
        name: user.name,
        email: user.email,
        createdAt: user.createdAt,
        id: user.id,
      },
      token: token,
      refreshToken: refreshToken,
    });
  } catch (err) {
    res.status(401).json({ error: err.message });
  }
};
