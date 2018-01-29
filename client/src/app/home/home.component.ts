import { Component, OnInit } from '@angular/core';
import { MainService } from '../main.service';
import { User } from "./../user";
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  curuser: User;
  users: Array<object>

  constructor(private _mainService:MainService, private _router:Router) { 
    this.curuser = new User;
    this.users=[{}]
  }

  ngOnInit() {
    this._mainService.checklogin((data)=>{
      if(data===false){
        this._router.navigate(['/'])
      }
    })

    this._mainService.get_users((data)=>{
      this.users=data
      
    })
  }

  gotoTrivia(){
    this._router.navigate(['/trivia'])
  }

}
