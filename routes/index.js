import { Router} from "express"
import userRoutes from "./userRoutes.js"
import postRoutes from "./postRoutes.js"

const router = Router()

//* User Routes
router.use("/api/user",userRoutes)

// * Post Routes
router.use("/api/post",postRoutes)


export default router;
