// import {User} from "../models/index.js";

export async function addNewUser(req, res, next){
    try {
        res.status(200).send("User rout")
    }catch(e) {
        next(e)
    }
}