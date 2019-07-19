import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'gestiBankProject';
  isIdentified = localStorage.getItem('isIdentified');

  constructor(private router: Router){}

  logout(){
    localStorage.setItem('isIdentified', 'false');
    this.isIdentified = localStorage.getItem('isIdentified');
    this.router.navigate(['conseiller/connect']);
  }
}
