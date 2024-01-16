import { Router} from "express"
import userRoutes from "./userRoutes.js"
import postRoutes from "./postRoutes.js"
import noteRoutes from "./noteRoutes.js"

const router = Router()

//* User Routes
router.use("/api/user",userRoutes)

//* For Post Routes
router.use("/api/task",postRoutes)

//* For Note Routes
router.use("/api/note",noteRoutes)

export default router;
