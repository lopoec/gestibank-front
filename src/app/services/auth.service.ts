import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  users : Users;
  isIdentified: boolean;

  constructor(private httpClient: HttpClient) { }

  login(){
    return this.httpClient.get<Users>();
  }

  isAuth(){

  }


}
