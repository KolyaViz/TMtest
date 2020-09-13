import express from "express";
import { deleteUserById, getAllUsers, getUserById} from "../requestHandlers/user.handlers.js";
import wrapper from "../utils/wrapper.js";
import authMiddleware from "../middleware/auht.middleware";

const router = express.Router();

router.get("/", wrapper(getAllUsers));
router.get("/:id",wrapper(getUserById));
router.delete("/:id", wrapper(deleteUserById));

export default router;