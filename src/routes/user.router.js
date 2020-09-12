import express from "express";
import {addNewUser, deleteUserById, getAllUsers, getUserById} from "../requestHandlers/user.handlers.js";
import wrapper from "../utils/wrapper.js";
const router = express.Router();

// router.post("/",wrapper(addNewUser));
router.get("/",wrapper(getAllUsers));
router.get("/:id", wrapper(getUserById));
router.delete("/:id", wrapper(deleteUserById));

export default router;