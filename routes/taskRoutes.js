
import { Router} from "express"
import authMiddleware from "../middileware/authMiddleware.js";
import { addTask,deleteTask,showTask, updateTask } from "../controller/TaskController.js";

const router = Router()

router.post("/",authMiddleware,addTask)
router.get("/showtask",authMiddleware,showTask)
router.put("/update/:id", authMiddleware,updateTask);
router.delete("/delete/:id",authMiddleware,deleteTask)

export default router

/**
 * @swagger
 * tags:
 *   name: Tasks
 *   description: API endpoints for tasks
 */

/**
 * @swagger
 * /api/task:
 *   post:
 *     summary: Create a new task
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *             example:
 *               title: Task 1
 *     responses:
 *       201:
 *         description: Task created successfully
 *         content:
 *           application/json:
 *             example:
 *               message: Task created successfully
 */

/**
 * @swagger
 * /api/task/showtask:
 *   get:
 *     summary: Get all tasks
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             example:
 *               tasks: []
 */

/**
 * @swagger
 * /api/task/update/{id}:
 *   put:
 *     summary: Update a task by ID
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the task to be updated
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *             example:
 *               title: Updated Task 1
 *     responses:
 *       200:
 *         description: Task updated successfully
 *         content:
 *           application/json:
 *             example:
 *               message: Task updated successfully
 */

/**
 * @swagger
 * /api/task/delete/{id}:
 *   delete:
 *     summary: Delete a task by ID
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the task to be deleted
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Task deleted successfully
 *         content:
 *           application/json:
 *             example:
 *               message: Task deleted successfully
 */
