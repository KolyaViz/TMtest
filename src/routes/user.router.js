import express from "express";
import {addNewUser} from "../requestHandlers/user.handlers.js";

const router = express.Router();

router.post("/",addNewUser)

export default router;