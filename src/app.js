import express from "express";
import router from "./routes/index.js";

const app = express();

app.use("/", router)

app.get("/",(req, res, next)=>{
	res.send("home");
});

export default app;