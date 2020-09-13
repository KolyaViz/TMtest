import Sequelize from "sequelize";
import bcrypt from "bcrypt";
import models from "../models";
const {User} = models;

export async function signUp(req, res, next){
	const {userName, email, password}  = req.body;
	const hash = await bcrypt.hash(password,10);


	const user = await User.findOne({
		where: Sequelize.or(
			{userName},
			{email}
		)
	});
	if(user){
		return res.send("Username or email already in user");
	}

	const newUser = await User.create({userName, email, password: hash});

	req.session.email = email;
	console.log(email, req.session.email)
	return res.status(200).json({
		message: "user created successfully"
	});
}

export async function logIn(req, res, next){

}

// export async function logIn(req, res, next){
// 	const {email, password} = req.body;
//
// 	const user = await User.findOne({
// 		where: {email}
// 	});
//
// 	if(!user){
// 		return res.send("wrong username or password");
// 	}
//
// 	const result = await bcrypt.compare(password,user.password);
//
// 	if(!result){
// 		return res.send("wrong username or password");
// 	}
//
// 	req.session.email = email;
//
// 	return res.status(200).send(req.session.email);
//
// }

