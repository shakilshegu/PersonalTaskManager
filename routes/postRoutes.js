import { Router} from "express"
import authMiddleware from "../middileware/authMiddleware.js";
import { addTask,deleteTask,showTask, updateTask } from "../controller/TaskController.js";

const router = Router()

router.post("/",authMiddleware,addTask)
router.get("/showtask",authMiddleware,showTask)
router.put("/update/:id", authMiddleware, updateTask);
router.delete("/:id",authMiddleware,deleteTask)



export default router