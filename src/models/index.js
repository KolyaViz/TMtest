import Sequelize from "sequelize";
import user from "./user";
import item from "./item";

const sequelize =  new Sequelize(
	process.env.DATABASE,
	process.env.DATABASE_USER,
	process.env.DATABASE_PASSWORD,
	{
		host: "localhost",
		dialect: "postgres"
	}
);

const models = {
	User: user(sequelize),
	Item: item(sequelize)
};

export {sequelize};

export default models;