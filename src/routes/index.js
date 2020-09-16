import express from "express";
import userRouter from  "./user.router.js";
import itemRouter from "./item.router.js";
import authROuter from "./auth.router";
const router = express.Router();

router.get("/", (req, res, next)=>{
	let userName = false;
	if(req.user) userName = req.user.userName;
	console.log(req.user)
	res.status(200).render("pages/home.ejs", {userName});
});

router.use("/users", userRouter);
router.use("/items", itemRouter);
router.use("/auth", authROuter);

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