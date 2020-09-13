import express from "express";
import {addNewItem, deleteItemById, getAllItems, getItemById, updateItemById} from "../requestHandlers/item.handlers.js";
import wrapper from "../utils/wrapper.js";
const router = express.Router();

router.post("/", wrapper(addNewItem));
router.get("/", wrapper(getAllItems));
router.get("/:id", wrapper(getItemById));
router.put("/:id", wrapper(updateItemById));
router.delete("/:id", deleteItemById);

export default router;