import { Component, OnInit } from '@angular/core';
import { MainService } from '../main.service';
import { User } from "./../user";
import {Router} from '@angular/router';
import { Trivia } from "./../trivia";
import { Answers } from "./../answers";

@Component({
  selector: 'app-trivia',
  templateUrl: './trivia.component.html',
  styleUrls: ['./trivia.component.css']
})
export class TriviaComponent implements OnInit {
  question1:Trivia
  question2:Trivia
  question3:Trivia
  answers:Answers

  constructor(private _mainService:MainService, private _router:Router) { 
    this.question1=new Trivia,
    this.question2=new Trivia,
    this.question3=new Trivia,
    this.answers=new Answers
  }

  ngOnInit() {
    this._mainService.checklogin((data)=>{
      if(data===false){
        this._router.navigate(['/'])
      }
    }),

    this._mainService.get_questions((data)=>{
      this.question1.question=data[0].question
      this.question1.ans1=data[0].ans2
      this.question1.ans2=data[0].ans3
      this.question1.ans3=data[0].ans1
      this.question2.question=data[1].question
      this.question2.ans1=data[1].ans1
      this.question2.ans2=data[1].ans2
      this.question2.ans3=data[1].ans3
      this.question3.question=data[2].question
      this.question3.ans1=data[2].ans3
      this.question3.ans2=data[2].ans1
      this.question3.ans3=data[2].ans2

      this.answers.ques1=this.question1.question
      this.answers.ques2=this.question2.question
      this.answers.ques3=this.question3.question
      this.answers.ans1=this.question1.ans1
      this.answers.ans2=this.question2.ans1
      this.answers.ans3=this.question3.ans1
    })
  }

  gohome(){
    this._router.navigate(['/home'])
  }

  check_answers(){
    this._mainService.check_answers(this.answers, (data)=>{
      alert(`You got ${data.wins} out of 3 correct!`);
      this._router.navigate(['/home'])
    })
  }

}
