import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  //user : User;
  isIdentified: boolean;

  constructor(private httpClient: HttpClient) { }

  login(){
    //return this.httpClient.get<User>("http://localhost:8080/checkLogin");
  }

  isAuth(){

  }


}
