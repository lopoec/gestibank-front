import { Component, OnInit } from '@angular/core';
import { ConseillerService } from 'src/app/services/conseiller.service';
import { Requete } from 'src/app/models/Requete';

@Component({
  selector: 'app-conseiller-requete-list',
  templateUrl: './conseiller-requete-list.component.html',
  styleUrls: ['./conseiller-requete-list.component.css']
})
export class ConseillerRequeteListComponent implements OnInit {

  requetes : Requete[];

  constructor(private conseillerService: ConseillerService) { }

  ngOnInit() {
    this.conseillerService.getRequetes().subscribe(
      reponse => this.requetes = reponse);
  }
}
