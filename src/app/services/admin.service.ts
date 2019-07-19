import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Demande } from '../models/Demande';
import { Conseiller } from '../models/Conseiller';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private httpClient: HttpClient) { }

  getListeDemandesOuverture(){
    return this.httpClient.get<Demande[]>("http://localhost:8080/SpringJPAWebService/admin/DemandeOuverture")
  }

  getListeConseillers(){
    return this.httpClient.get<Conseiller[]>("http://localhost:8080/SpringJPAWebService/admin/ListeConseiller")
  }
}
