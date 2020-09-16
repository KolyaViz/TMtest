import {DataTypes} from "sequelize";

const item = (sequelize)=>{
	const Item = sequelize.define("item",{
		name: {
			type: DataTypes.STRING,
			allowNull: false
		},
		price: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		description: DataTypes.STRING
	});
	return Item;
};

export default item;