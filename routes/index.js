import { Router} from "express"
import userRoutes from "./userRoutes.js"
import taskRoutes from "./taskRoutes.js"
import noteRoutes from "./noteRoutes.js"

const router = Router()

//* User Routes
router.use("/api/user",userRoutes)

//* For Post Routes
router.use("/api/task",taskRoutes)

//* For Note Routes
router.use("/api/note",noteRoutes)

export default router;
