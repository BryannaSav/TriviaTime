var mongoose = require("mongoose");
var User = mongoose.model("User");
var Trivia = mongoose.model("Trivia");

module.exports={
    login:function(req,res){
        User.findOne({name:req.body.name}, function(err, user){
            if(user==null){
                User.create({name:req.body.name, wins:0, loses:0, games:0, percentage:0}, function(err, newuser){
                    req.session.curusername=newuser.name;
                    req.session.save();

                })
            }
            else{
                req.session.curusername=user.name;
                req.session.save()
            }
            return res.json("success");
        })
    },
    checklogin:function(req,res){
        if(req.session.curusername===undefined){
            return res.json(false);
        }
        else{
            return res.json(true);
        }
    },

    logout:function(req,res){
        req.session.destroy();
        return res.redirect("/")
    },

    create_trivia(req,res){
        Trivia.create({question:req.body.question, ans1:req.body.correct, ans2:req.body.fakeone, ans3:req.body.faketwo}, function(err, newquestion){
            return res.json(newquestion)
        })
    },

    get_questions(req,res){
        Trivia.aggregate([{$sample: {size: 3}}], function(err, questions){
            return res.json(questions)
        })
    },
    
    check_answers(req,res){
        User.findOne({name:req.session.curusername}, function(err, user){
            results={
                wins:0,
                loses:0
            }
            Trivia.findOne({question:req.body.ques1}, function(err, question1){
                if(req.body.ans1===question1.ans1){
                    user.wins+=1
                    results.wins+=1
                    user.save()
                }else{
                    user.loses+=1
                    results.loses+=1
                    user.save()
                }
                Trivia.findOne({question:req.body.ques2}, function(err, question2){
                    if(req.body.ans2===question2.ans1){
                        user.wins+=1
                        results.wins+=1
                        user.save()
                    }else{
                        user.loses+=1
                        results.loses+=1
                        user.save()
                    }
                    Trivia.findOne({question:req.body.ques3}, function(err, question3){
                        if(req.body.ans3===question3.ans1){
                            user.wins+=1
                            results.wins+=1
                            user.save()
                        }else{
                            user.loses+=1
                            results.loses+=1
                            user.save()
                        }
                        user.games+=3;
                        num1=user.wins
                        num2=user.games
                        user.percentage=num1/num2
                        console.log(num1)
                        console.log(num2)
                        console.log(user.percentage)
                        user.save()
                        return res.json(results)
                    })
                })
            })
        })
    },

    get_users(req,res){
        User.find({}, function(err, users){
            return res.json(users);
        })
    }
}