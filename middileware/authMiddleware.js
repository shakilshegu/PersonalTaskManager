import jwt from "jsonwebtoken";
import prisma from "../db/dbconfig.js";

const authMiddleware = async (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.json({ Status: 401, message: "Token is missing" });
  }
  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    const user = await prisma.user.findFirst({
      where: {
        id: payload.userId,
      },
    });
    if (!user) {
      return res.json({ Status: 401, message: "User not found" });
    }
    req.user = user;
    next();
  } catch (error) {
    return res.json({ status: 401, message: "Invalid token" });
  }
};

export default authMiddleware;
