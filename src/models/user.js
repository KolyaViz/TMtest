import {DataTypes} from "sequelize";

const user = (sequelize) => {
	const User = sequelize.define("user", {
		userName: {
			type: DataTypes.STRING
		}
	});
	return User;
};

export default user;
