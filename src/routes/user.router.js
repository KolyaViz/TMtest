import express from "express";
import { deleteUserById, getAllUsers, getUserById, userPage} from "../requestHandlers/user.handlers.js";
import wrapper from "../utils/wrapper.js";
import authMiddleware from "../middleware/auth.middleware";

const router = express.Router();


router.get("/", wrapper(getAllUsers));
router.get("/user_page",authMiddleware, wrapper(userPage))
router.get("/:id",wrapper(getUserById));
router.delete("/:id", wrapper(deleteUserById));

export default router;