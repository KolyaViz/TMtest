import express from "express";
import userRouter from  "./user.router.js";
import itemRouter from "./item.router.js";
import authROuter from "./auth.router";
const router = express.Router();
import authMiddleware from "../middleware/auht.middleware";

router.get("/", (req, res, next)=>{
	console.log(req.session.email)
	res.status(200).render("index",{
		email: req.session.email
	});
});

router.get("/admin", authMiddleware, (req, res, next)=>{
	res.send("admin")
})

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