import {DataTypes} from "sequelize";

const user = (sequelize) => {
	const User = sequelize.define("user", {
		userName: {
			type: DataTypes.STRING,
			allowNull: false
		},
		email:{
			type: DataTypes.STRING,
			allowNull: false
		},
		password:{
			type: DataTypes.STRING,
			allowNull: false
		}
	});
	return User;
};

export default user;
