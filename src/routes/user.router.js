import express from "express";
import {addNewUser, getAllUsers, getUserById} from "../requestHandlers/user.handlers.js";

const router = express.Router();

router.post("/",addNewUser);
router.get("/",getAllUsers);
router.get("/:id", getUserById);

export default router;