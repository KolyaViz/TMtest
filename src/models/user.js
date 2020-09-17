import {DataTypes} from "sequelize";

const user = (sequelize) => {
	const User = sequelize.define("user", {
		userName: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: "compositeIndex"
		},
		email:{
			type: DataTypes.STRING,
			allowNull: false,
			unique: true
		},
		password:{
			type: DataTypes.STRING,
			allowNull: false
		}
	});
	return User;
};

export default user;
