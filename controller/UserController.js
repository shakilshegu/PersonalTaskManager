import prisma from "../db/dbconfig.js";
import jwt from "jsonwebtoken";

//* Create User
export const createUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const findUser = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });
    if (findUser) {
      return res.status(401).json({
        success: false,
        message: "Email Already Taken . Please another email.",
      });
    }
    const newUser = await prisma.user.create({
      data: {
        username: username,
        email: email,
        password: password,
      },
    });
    return res
      .status(200)
      .json({ success: true, data: newUser, message: "User created." });
  } catch (error) {
    res.status(500).json({ success: false, message: "Something went wrong" });
  }
};

//* Login User
export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });
    if (!user) {
      return res
        .status(401)
        .json({ success: false, message: "User does not exist" });
    }
    if (password !== user.password) {
      return res.status(401).json({ success: false, message: "Invalid password" });
    }
    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });
    res.status(200).json({ success: true, message: "Login successfull",token:token });
  } catch (error) {
    res.status(500).json({ success: false, message: "Something went wrong" });
  }
};

//* checking jwt authmiddileware working
export const me = async (req, res) => {
  res.json(req.user);
};
