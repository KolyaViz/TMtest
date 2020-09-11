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

// sequelize.authenticate().then(() => {
// 	console.log('Connection to database has been established successfully.');
// }).catch(err => {
// 	console.error('Unable to connect to database:', err);
// });


// const User = sequelize.define('user', {
// 	username: {
// 		type: DataTypes.STRING,
// 		unique: true,
// 	},
// });


// (async () => {
// 	await sequelize.sync({ force: true });
// 	// Code here
// })();

// export {User};

const models = {
	User: user(sequelize),
	Item: item(sequelize)
};

export {sequelize};

export default models;