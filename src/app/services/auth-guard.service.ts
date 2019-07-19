import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { AppComponent } from '../app.component';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }

  canActivate(): boolean {
    if(localStorage.getItem('isIdentified') == "false" || localStorage.getItem('isIdentified') == null) {
      this.router.navigate(['conseiller/connect']);
      console.log("refus acces");
      return false;
    }
    console.log(localStorage.setItem('isIdentified', 'true'));
    console.log("acces");
    return true;
  }

}
