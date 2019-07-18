import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-conseiller-connect',
  templateUrl: './conseiller-connect.component.html',
  styleUrls: ['./conseiller-connect.component.css']
})
export class ConseillerConnectComponent implements OnInit {
  message = "";
  constructor(private authService : AuthService, private router: Router) { }

  ngOnInit() {
  }

  login() {
    this.authService.login();
    if(this.authService.user.type == "Conseiller"){
      localStorage.setItem("isIdentified", "true");
      this.router.navigate(['conseiller']);
      this.message = "ok";
    } else {
      this.message = "Mot de passe ou pseudo incorrect";
    }
  }
}
