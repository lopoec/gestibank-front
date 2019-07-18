import { Component, OnInit } from '@angular/core';
import { ConseillerService } from 'src/app/services/conseiller.service';
import { Requete } from 'src/app/models/Requete';

@Component({
  selector: 'app-conseiller-main-menu',
  templateUrl: './conseiller-main-menu.component.html',
  styleUrls: ['./conseiller-main-menu.component.css']
})
export class ConseillerMainMenuComponent implements OnInit {

  constructor(private conseillerService: ConseillerService) { }

  ngOnInit() {
  }
}
