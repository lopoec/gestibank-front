import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Conseiller } from '../models/Conseiller';

@Injectable({
  providedIn: 'root'
})
export class ConseillerService {

  constructor(private httpClient: HttpClient) { }

  getConseiller(){
    return this.httpClient.get<Conseiller>("http://localhost:8080/SpringJPAWebService/conseiller/123456");
  }
}