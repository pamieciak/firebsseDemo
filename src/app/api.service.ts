import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFireDatabase } from '@angular/fire/compat/database';

export interface ApiResponse {
  name: string;
  surname: string;
  age: number;
  wife: boolean;
};

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  
  isLoggedIn
  = false;
  constructor(private getApi: AngularFireDatabase, public firebaseAuth: AngularFireAuth ) {}

  async signin(email: string, password: string){
    await this.firebaseAuth.signInWithEmailAndPassword(email,password)
    .then(res => {
      this.isLoggedIn = true
      localStorage.setItem('user', JSON.stringify(res.user))
    })
  }
  async signup(email: string, password: string){
    await this.firebaseAuth.createUserWithEmailAndPassword(email,password)
    .then(res => {
      this.isLoggedIn = true
      localStorage.setItem('user', JSON.stringify(res.user))
    })
  }

 logOut(){
   this.firebaseAuth.signOut()
   localStorage.removeItem('user')
 }
  

  getApiResponse() {
    return this.getApi.list<ApiResponse>('/').valueChanges().pipe(
      
    );
  }
}
