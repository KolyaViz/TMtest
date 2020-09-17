import express from "express";
import {
	addNewItem,
	deleteItemById,
	getAllItems,
	getItemById,
	itemsPage,
	updateItemById,
	oneItemPage
} from "../requestHandlers/item.handlers.js";
import wrapper from "../utils/wrapper.js";
const router = express.Router();

router.post("/", wrapper(addNewItem));
router.get("/", wrapper(getAllItems));
router.get("/items_page", wrapper(itemsPage));
router.get("/one_item_page/:id", wrapper(oneItemPage));
router.get("/:id", wrapper(getItemById));
router.put("/:id", wrapper(updateItemById));
router.delete("/:id", deleteItemById);

export default router;