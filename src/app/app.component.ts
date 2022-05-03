import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map, tap } from 'rxjs';
import { ApiResponse, ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit{

isSigneedIn = false

constructor(public apiService : ApiService){}

ngOnInit(){
  if(localStorage.getItem('user')!== null)
  this.isSigneedIn = true
  else 
  this.isSigneedIn = false
}

async onSignup(email: string, password: string){
await this.apiService.signup(email, password)
if(this.apiService.isLoggedIn)
this.isSigneedIn = true;
}

async onSignin(email: string, password: string){
await this.apiService.signin(email, password)
if(this.apiService.isLoggedIn)
this.isSigneedIn = true;
}

handleLogout(){
  this.isSigneedIn = false;
}


}
