import express from "express";
import userRouter from  "./user.router.js";
import itemRouter from "./item.router.js";
const router = express.Router();

router.get("/", (req, res, next)=>{
	res.status(200).send("Home");
});

router.use("/users", userRouter);
router.use("/items", itemRouter);


router.use("/*", (req, res, next)=>{
	res.status(404).send("not-found");
});

router.use((err, req, res, next)=>{
	if(!err.statusCode) {err.statusCode = 500;}

	console.log(err);
	res.status(err.statusCode).json({
		status: err.statusCode,
		Error: err.toString()
	});
});
export default router;