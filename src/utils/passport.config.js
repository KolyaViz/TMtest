import passport from "passport";
import {Strategy} from "passport-local";
import models from "../models";
import bcrypt from "bcrypt";

const {User} = models

passport.serializeUser((user, done) =>{
    console.log("Serialize")
    done(null, user.id);
});

passport.deserializeUser(async (id, done)=> {
    console.log("Deserialize")
    const user = await User.findByPk(id)
    done(null, user);
});

passport.use(new Strategy(
    {usernameField: "email"},
    async (email, password, done) => {
        const user = await User.findOne({where: {email}});

        // if(err) {return done(err)}
        if (!user) {
            return done(null, false, { message: 'Incorrect username.' });
        }
        console.log(password, user.password)
        const validPassword = await bcrypt.compare(password, user.password)
        if (!validPassword) {
            return done(null, false, { message: 'Incorrect password.' });
        }
        return done(null, user);
    }

));







// export default function passportConfig(){
//     passport.use(new Strategy(
//         async function(userName, password, done) {
//             const user = await User.findOne({where: {userName}});
//
//             if(err) {return done(err)}
//             if (!user) {
//                 return done(null, false, { message: 'Incorrect username.' });
//             }
//             if (!user.validPassword(password)) {
//                 return done(null, false, { message: 'Incorrect password.' });
//             }
//             return done(null, user);
//         }
//
//     ));
//
//
//     passport.authenticationMiddleware = authenticationMiddleware
// }
