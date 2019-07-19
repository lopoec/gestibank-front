import { Component, OnInit } from '@angular/core';
import {InscriptionService, ClientPotentiel} from '../services/inscription.service'

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {
  clientPotentiel: ClientPotentiel = new ClientPotentiel("","","","", "", "", "");

  constructor(private inscriptionService: InscriptionService) { }

  ngOnInit() {
  }

  createClientPotentiel(): void {
    this.inscriptionService.createClientPotentiel(this.clientPotentiel)
        .subscribe( data => {
          alert("Client Potentiel created successfully.");
        });

  };

}
