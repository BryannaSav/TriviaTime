import { Component, OnInit } from '@angular/core';
import { MainService } from '../main.service';
import { User } from "./../user"
import { Trivia } from "./../trivia"
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  trivia:Trivia
  
  constructor(private _mainService:MainService, private _router:Router) {
    this.trivia=new Trivia
   }

  ngOnInit() {
    this._mainService.checklogin((data)=>{
      if(data===false){
        this._router.navigate(['/'])
      }
    })
  }

  create_trivia(){
    this._mainService.create_trivia(this.trivia, (data)=>{
      alert("Question Successfully Added"),
      this._router.navigate(['/home'])
    })
  }

  gohome(){
    this._router.navigate(['/home'])
  }

}
