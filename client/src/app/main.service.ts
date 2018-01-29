import { Injectable } from '@angular/core';
import {Http} from "@angular/http"
import { User } from "./user"

@Injectable()
export class MainService {

  constructor(private _http:Http) { }

  login(user, callback){
    this._http.post("/login", user).subscribe(
      response=>{
        callback(response.json());
      },
      error=>{console.log(error)}
    )
  };
  checklogin(callback){
    this._http.get('/checklogin').subscribe(
      response=>{
        callback(response.json());
      },
      error=>{console.log(error)}
    )
  };
  
  create_trivia(trivia, callback){
    this._http.post("/trivia/create", trivia).subscribe(
      response=>{
        callback(response.json());
      },
      error=>{console.log(error)}
    )
  };

  get_questions(callback){
    this._http.get("/get/questions").subscribe(
      response=>{
        callback(response.json());
      },
      error=>{console.log(error)}
    )
  }

  check_answers(answers, callback){
    this._http.post("/check/answers", answers).subscribe(
      response=>{
        callback(response.json());
      },
      error=>{console.log(error)}
    )
  }

  get_users(callback){
    this._http.get("/get/users").subscribe(
      response=>{
        callback(response.json());
      },
      error=>{console.log(error)}
    )
  }

}
