import passport from "passport";
import {Strategy} from "passport-local";
import models from "../models";
import bcrypt from "bcrypt";

const {User} = models;

passport.serializeUser((user, done) =>{
	done(null, user.id);
});

passport.deserializeUser(async (id, done)=> {
	const user = await User.findByPk(id);
	done(null, user);
});

passport.use(new Strategy(
	{usernameField: "email"},
	async (email, password, done) => {
		const user = await User.findOne({where: {email}});

		if (!user) {
			return done(null, false, { message: "Incorrect username." });
		}
		const validPassword = await bcrypt.compare(password, user.password);
		if (!validPassword) {
			return done(null, false, { message: "Incorrect password." });
		}
		return done(null, user);
	}

));
