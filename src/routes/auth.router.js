import express from "express";
import {registration} from "../requestHandlers/auth.handlers";
import wrapper from "../utils/wrapper";

const router = express.Router();

router.post("/singUp", wrapper(registration));

export default router;