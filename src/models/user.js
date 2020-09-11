import Sequelize from "sequelize";
const {DataTypes} = Sequelize;


const user = (sequelize) => {
	const User = sequelize.define("user", {
		userName: {
			type: DataTypes.STRING
		},
	});
	return User;
};

export default user;
