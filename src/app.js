import express from "express";
import cors from "cors";
import "dotenv/config";
import {sequelize} from "./models";
import router from "./routes/index.js";
import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());

app.use("/", router);

sequelize.sync({ force: false }).then(async () => {

	app.listen(process.env.PORT, () =>
		console.log(`Example app listening on port ${process.env.PORT}!`),
	);
});
