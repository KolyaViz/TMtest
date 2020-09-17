import models from "../models";

const {User} = models;

export async function getAllUsers(req, res, next){

	const users = await User.findAll();
	res.send(users);

}
export async function getUserById(req, res, next){

	const {id} = req.params;
	const user = await User.findByPk(id);
	res.status(200).json({
		user: user.toJSON()
	});

}
export async function deleteUserById(req, res, next){
	const {id} = req.params;

	const result = await User.destroy({where: {id}});

	res.send("user deleted");
}
export async function userPage(req, res, next){
	const {userName, email} = req.user;
	res.render("pages/user_page.ejs",{userName,email});
}