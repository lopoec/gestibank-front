import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ClientPotentiel } from '../models/ClientPotentiel';



@Injectable({
  providedIn: 'root'
})
export class InscriptionService {

  constructor(private httpClient:HttpClient) { }

  public createClientPotentiel(clientPotentiel) {
    return this.httpClient.post<ClientPotentiel>("http://localhost:8080/SpringJPAWebService/clientPotentiel/CreationClientPotentiel", clientPotentiel);
  }
}
