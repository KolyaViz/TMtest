import Sequelize from "sequelize";
import bcrypt from "bcrypt"
import models from "../models";
const {User} = models;

export async function login(req, res, next){

}

export async function registration(req, res, next){
    const {userName, email, password}  = req.body;
    const hash = await bcrypt.hash(password,10);


    const user = await User.findOne({
        where: Sequelize.or(
            {userName},
            {email}
        )
    })
    if(user){
        return res.send("Username or email already in user")
    }

    const newUser = await User.create({userName, email, password: hash})
    return res.status(200).json({
        message: "user created successfully"
    })
}