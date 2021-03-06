import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/User';
import { Conseiller } from '../models/Conseiller';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user : User = new User(0,"","","","","","","","Conseiller");
  //isIdentified: boolean = false;
  ngOnInit() {
    localStorage.setItem("isIdentified", "false");
  }

  constructor(private httpClient: HttpClient) { }

  login(){
    /*this.httpClient.get<User>("http://localhost:8080/checkLogin").subscribe(
      reponse => this.user = reponse
    );*/
  }

  isAuth(){

  }

  checklogin(pseudo, mdp){
    return this.httpClient.get<Conseiller>("http://localhost:8080/SpringJPAWebService/conseiller/login/"+ pseudo + "/" + mdp +"/");
  }


}
