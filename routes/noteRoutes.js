import { Router} from "express"
import authMiddleware from "../middileware/authMiddleware.js";
import{fetchNotes,createNotes, deleteNotes,updateNotes} from "../controller/NoteController.js"

const router = Router()

router.post("/createnote",authMiddleware,createNotes)
router.get("/shownotes",authMiddleware,fetchNotes)
router.delete("/deletenote/:noteId",authMiddleware,deleteNotes)
router.put("/updatenote/:noteId", authMiddleware, updateNotes);


export default router