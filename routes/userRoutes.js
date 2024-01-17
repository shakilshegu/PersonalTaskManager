
import { Router } from "express";
import { createUser,loginUser } from "../controller/UserController.js";

const router = Router()

//* User signup route
router.post("/signup",createUser)
//* User login route
router.post("/login",loginUser)


export default router

