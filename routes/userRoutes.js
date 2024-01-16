import { Router } from "express";
import { createUser,loginUser, me } from "../controller/UserController.js";
import authMiddleware from "../middileware/authMiddleware.js";

const router = Router()


router.post("/signup",createUser)
router.post("/login",loginUser)
router.get("/me",authMiddleware,me)


export default router