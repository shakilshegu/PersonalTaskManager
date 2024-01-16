import prisma from "../db/dbconfig.js";
import jwt from "jsonwebtoken"

//* Create User
export const createUser = async (req, res) => {
  const { username, email, password } = req.body;
  const findUser = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });
  if (findUser) {
    return res.json({
      status: 400,
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
  return res.json({ status: 200, data: newUser, message: "User created." });
};

//* Login User
export const loginUser = async (req, res) => {
  const { email, password } = req.body;
  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });
  if (!user) {
    return res.status(401).json({ status: 401, message: "User does not exist" });
  }
  if (password !== user.password) {
    return res.status(401).json({ status: 401, message: "Invalid password" });
  }
  const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET,{
    expiresIn:"1d"
  });
  res.json({user,token});
};

//* checking jwt authmiddileware working
export const me = async (req,res)=>{
  res.json(req.user)
}
