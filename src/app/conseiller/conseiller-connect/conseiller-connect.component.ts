import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { User } from 'src/app/models/User';
import { Conseiller } from 'src/app/models/Conseiller';

@Component({
  selector: 'app-conseiller-connect',
  templateUrl: './conseiller-connect.component.html',
  styleUrls: ['./conseiller-connect.component.css']
})
export class ConseillerConnectComponent implements OnInit {
  message = "";
  mdp: String;
  pseudo: String;
  conseiller: Conseiller = new Conseiller(0,"","","","","","","",1);

  constructor(private authService : AuthService, private router: Router) { }

  ngOnInit() {
  }

  login() {

    this.authService.checklogin(this.pseudo, this.mdp).subscribe(
      rep => this.checking(rep)
    )
  }

  checking(reponse) {
    this.conseiller = reponse;
    //console.log(this.conseiller.matricule);
    if(this.conseiller != null){
      let matricule = this.conseiller.matricule;
      localStorage.setItem("isIdentified", "true");
      localStorage.setItem("matricule", matricule.toString());
      console.log(localStorage.getItem("matricule"));
      this.router.navigate(['conseiller']);
      this.message = "ok";
    } else {
      this.message = "Mot de passe ou pseudo incorrect";
    }
  }
}
