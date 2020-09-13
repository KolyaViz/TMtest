import express from "express";
import {logIn, logOut, signUp} from "../requestHandlers/auth.handlers";
import wrapper from "../utils/wrapper";
import passport from "passport";

const router = express.Router();

router.post("/singUp", wrapper(signUp));
// router.post("/logIn", wrapper(logIn));
// router.get("/logOut", wrapper(logOut));

router.post('/login', passport.authenticate('local', {
    successRedirect: "/users",
    failureRedirect: "/"
}));

export default router;