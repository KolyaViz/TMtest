import express from "express";
import {logIn, logOut, signUp, signUpPage} from "../requestHandlers/auth.handlers";
import wrapper from "../utils/wrapper";
import passport from "passport";

const router = express.Router();

router.get("/signUp",wrapper(signUpPage));
router.post("/signUp", wrapper(signUp));
router.get("/login",wrapper(logIn));

router.post('/logIn', function(req, res, next) {
    passport.authenticate('local', function(err, user, info) {
        if (err) { return next(err); }
        if (!user) { return res.render("pages/login_page.ejs",{failedLogIn: true}); }
        req.logIn(user, function(err) {
            if (err) { return next(err); }
            return res.redirect('/users/user_page');
        });
    })(req, res, next);
});

router.get("/logOut",logOut);



export default router;