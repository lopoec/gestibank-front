import { Component, OnInit } from '@angular/core';
import { Demande } from 'src/app/models/Demande';
import { ConseillerService } from 'src/app/services/conseiller.service';

@Component({
  selector: 'app-conseiller-demandeouverture-list',
  templateUrl: './conseiller-demandeouverture-list.component.html',
  styleUrls: ['./conseiller-demandeouverture-list.component.css']
})
export class ConseillerDemandeouvertureListComponent implements OnInit {

  demandes : Demande[];
  
  constructor(private conseillerService: ConseillerService) { }

  ngOnInit() {
    this.conseillerService.getDemandes().subscribe(
      reponse => this.demandes = reponse
    )
  }

}
