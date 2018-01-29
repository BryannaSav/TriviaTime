var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    name:String,
    wins:Number,
    loses:Number,
    games:Number,
    percentage:Number,
},{timestamps:true});

var TriviaSchema = new Schema({
    question:String,
    ans1:String,
    ans2:String,
    ans3:String

},{timestamps:true});


mongoose.model('User',UserSchema);
mongoose.model('Trivia',TriviaSchema);
