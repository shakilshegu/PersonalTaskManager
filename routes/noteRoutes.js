
import { Router} from "express"
import authMiddleware from "../middileware/authMiddleware.js";
import{fetchNotes,createNotes, deleteNotes,updateNotes} from "../controller/NoteController.js"

const router = Router()

router.post("/createnote",authMiddleware,createNotes)
router.get("/shownotes",authMiddleware,fetchNotes)
router.delete("/deletenote/:noteId",authMiddleware,deleteNotes)
router.put("/updatenote/:noteId", authMiddleware, updateNotes);


export default router

/**
 * @swagger
 * tags:
 *   name: Notes
 *   description: API endpoints for managing notes
 */

/**
 * @swagger
 * /api/note/createnote:
 *   post:
 *     summary: Create a new note
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
 *               content:
 *                 type: string
 *             example:
 *               title: Sample Note
 *               content: This is the content of the note.
 *     responses:
 *       200:
 *         description: Note created successfully
 *         content:
 *           application/json:
 *             example:
 *               message: Note created successfully
 */

/**
 * @swagger
 * /api/note/shownotes:
 *   get:
 *     summary: Get all notes
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             example:
 *               notes: []
 */

/**
 * @swagger
 * /api/note/deletenote/{noteId}:
 *   delete:
 *     summary: Delete a note by ID
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: noteId
 *         required: true
 *         description: ID of the note to be deleted
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Note deleted successfully
 *         content:
 *           application/json:
 *             example:
 *               message: Note deleted successfully
 */

/**
 * @swagger
 * /api/note/updatenote/{noteId}:
 *   put:
 *     summary: Update a note by ID
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: noteId
 *         required: true
 *         description: ID of the note to be updated
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
 *               content:
 *                 type: string
 *             example:
 *               title: Updated Sample Note
 *               content: This is the updated content of the note.
 *     responses:
 *       200:
 *         description: Note updated successfully
 *         content:
 *           application/json:
 *             example:
 *               message: Note updated successfully
 */