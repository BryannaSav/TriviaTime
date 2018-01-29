var users = require("./../controllers/users.js");
var path=require("path");

module.exports=function(app){
    app.post("/login", function(req,res){
        users.login(req,res)
    });
    app.get("/checklogin", function(req,res){
        users.checklogin(req,res);
    });
    app.get("/logout", function(req,res){
        users.logout(req,res);
    });
    app.post("/trivia/create", function(req,res){
        users.create_trivia(req,res);
    })
    app.get("/get/questions", function(req,res){
        users.get_questions(req,res);
    })
    app.post("/check/answers", function(req,res){
        users.check_answers(req,res);
    })
    app.get("/get/users", function(req,res){
        users.get_users(req,res);
    })
    app.all("*", (req,res,next) => {
        res.sendFile(path.resolve("./client/dist/index.html"))
    });
}