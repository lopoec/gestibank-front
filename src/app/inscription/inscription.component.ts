import { Component, OnInit } from '@angular/core';
import {InscriptionService } from '../services/inscription.service'
import { ClientPotentiel } from '../models/ClientPotentiel';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {
  clientPotentiel: ClientPotentiel = new ClientPotentiel("","","","", "", "","");

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
