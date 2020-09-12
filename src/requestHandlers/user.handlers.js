import models from "../models";

const {User} = models;

export async function addNewUser(req, res, next){
	try {
		const {userName} = req.body;
		const newUser = await User.create({userName});
		res.status(200).json({
			newUser: newUser.toJSON()
		});
	}catch(e) {
		next(e);
	}
}


export async function getAllUsers(req, res, next){
	try {
		const users = await User.findAll();
		res.send(users);
	}catch(e) {
		next(e);
	}
}
export async function getUserById(req, res, next){
	try{
		const {id} = req.params;
		const user = await User.findByPk(id);
		res.status(200).json({
			user: user.toJSON()
		});
	}catch (e){
		next(e);
	}
}
export async function deleteUserById(req, res, next){
	const {id} = req.params;

	const result = await User.destroy({where: {id}});

	res.send("user deleted")
}