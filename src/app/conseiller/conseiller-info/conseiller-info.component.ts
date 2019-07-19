import { Component, OnInit } from '@angular/core';
import { Conseiller } from 'src/app/models/Conseiller';
import { ConseillerService } from 'src/app/services/conseiller.service';

@Component({
  selector: 'app-conseiller-info',
  templateUrl: './conseiller-info.component.html',
  styleUrls: ['./conseiller-info.component.css']
})
export class ConseillerInfoComponent implements OnInit {

  conseiller: Conseiller;

  constructor(private conseillerService: ConseillerService) { }

  ngOnInit() {
    let matricule = localStorage.getItem("matricule");
    this.conseillerService.getConseiller(matricule).subscribe(
      response =>this.conseiller = response);
  }

}
