import http from "http";
import app from "./src/app.js";
import "dotenv/config.js";
import {sequelize} from "./src/models/index.js";

sequelize.sync({ force: true }).then(async () => {
	const port = process.env.PORT || 3000;

	const server = http.createServer(app);

	server.listen(port);

	server.on("listening", onListening);
	server.on("error", onError);
	process.on("unhandledRejection", onUnhandledRejection);
	process.on("uncaughtException", onUncaughtException);


	function onListening(){
		console.log(`Server start on port ${port}`);
	}

	function onError(e){
		console.log(e);
	}

	function onUnhandledRejection(reason, promise){
		console.log(`Unhandled rejection at: ${promise}\n Reason: ${reason}`);
	}
	function  onUncaughtException(err, origin){
		console.log(`Exception: ${err}\n Exception origin: ${origin}`);
	}
});