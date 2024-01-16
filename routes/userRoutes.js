
import { Router } from "express";
import { createUser,loginUser } from "../controller/UserController.js";

const router = Router()

//* User signup route
router.post("/signup",createUser)
//* User login route
router.post("/login",loginUser)


export default router

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: API endpoints for user management
 */

/**
 * @swagger
 * /api/user/signup:
 *   post:
 *     summary: Create a new user
 *     tags:
 *       - Users
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *             example:
 *               username: john_doe
 *               email: john@example.com
 *               password: password123
 *     responses:
 *       200:
 *         description: User created successfully
 *         content:
 *           application/json:
 *             example:
 *               message: User created successfully
 */

/**
 * @swagger
 * /api/user/login:
 *   post:
 *     summary: User login
 *     tags:
 *       - Users
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *             example:
 *               email: john@example.com
 *               password: password123
 *     responses:
 *       200:
 *         description: User logged in successfully
 *         content:
 *           application/json:
 *             example:
 *               message: User logged in successfully
 *               token: <JWT_TOKEN>
 */