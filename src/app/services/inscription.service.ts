import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class ClientPotentiel{
  constructor(
    public nom:string,
    public prenom:string,
    public email:string,
    public adresse:string,
    public telephone:string,
    public revenuMens:string,
    public piecesJustif:string,
  ) {}
}

@Injectable({
  providedIn: 'root'
})
export class InscriptionService {

  constructor(private httpClient:HttpClient) { }

  public createClientPotentiel(clientPotentiel) {
    return this.httpClient.post<ClientPotentiel>("http://localhost:8080/SpringJPAWebService/clientPotentiel/CreationClientPotentiel", clientPotentiel);
  }
}
