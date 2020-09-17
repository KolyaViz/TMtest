import Sequelize from "sequelize";
import bcrypt from "bcrypt";
import models from "../models";
const {User} = models;

export async function signUpPage(req, res, next){
	res.status(200).render("pages/register_page.ejs",{failedSignUp: false});
}

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
		return res.render("pages/register_page.ejs",{failedSignUp: true});
	}

	const newUser = await User.create({userName, email, password: hash});

	req.login(newUser, function(err) {
		if (err) { return next(err); }
		return res.redirect("/users/user_page");
	});
}

export async function logIn(req, res, next){

	res.status(200).render("pages/login_page.ejs", {failedLogIn: false});
}

export async function logOut(req, res, next){
	req.logout();
	res.redirect("/");
}

