import {DataTypes} from "sequelize";

const item = (sequelize)=>{
    const Item = sequelize.define("item",{
        name: DataTypes.STRING
    })
    return Item
}

export default item;