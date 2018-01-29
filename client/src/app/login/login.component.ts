import { Component, OnInit } from '@angular/core';
import { MainService } from '../main.service';
import { User } from "./../user";
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user:User
  constructor(private _mainService:MainService, private _router:Router) { 
    this.user = new User
  }

  ngOnInit() {
  }

  login(){
    this._mainService.login(this.user, (data)=>{
      console.log(data)
      this._router.navigate(['home'])
    });
  }

}
