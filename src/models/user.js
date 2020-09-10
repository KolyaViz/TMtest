import Sequelize from "sequelize";
const {DataTypes} = Sequelize;


const user = (sequelize) => {
    const User = sequelize.define('user', {
        username: {
            type: DataTypes.STRING,
            unique: true,
        },
    });
    return User;
};

export default user;
