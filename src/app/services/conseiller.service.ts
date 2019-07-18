import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Conseiller } from '../models/Conseiller';
import { Requete } from '../models/Requete';
import { Demande } from '../models/Demande';

@Injectable({
  providedIn: 'root'
})
export class ConseillerService {

  constructor(private httpClient: HttpClient) { }

  getConseiller(){
    return this.httpClient.get<Conseiller>("http://localhost:8080/SpringJPAWebService/conseiller/123456");
  }

  getRequetes(){
    return this.httpClient.get<Requete[]>("http://localhost:8080/SpringJPAWebService/conseiller/requetes");
  }

  getDemandes(){
    return this.httpClient.get<Demande[]>("http://localhost:8080/SpringJPAWebService/conseiller/demandes");
  }

  
}