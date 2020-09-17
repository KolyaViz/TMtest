import express from "express";
import cors from "cors";
import "dotenv/config";
import {sequelize} from "./models";
import router from "./routes/index.js";
import bodyParser from "body-parser";
import session from "express-session";
import passport from "passport";
import "./utils/passport.config.js";

const app = express();

app.set("view engine", "ejs");

app.use(session({
	secret: process.env.SESSION_SECRET,
	resave: false,
	saveUninitialized: true
}));


app.use(passport.initialize());
app.use(passport.session());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());

app.use("/", router);

sequelize.sync({ force: false }).then(async () => {

	app.listen(process.env.PORT, () =>
		console.log(`Example app listening on port ${process.env.PORT}!`),
	);
});

