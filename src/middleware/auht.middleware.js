export default function authMiddleware(req, res, next){
        if(req.isAuthenticated()){
            return next()
        }
        res.redirect("/")
}