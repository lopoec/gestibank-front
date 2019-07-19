import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { Demande } from 'src/app/models/Demande';
import { Conseiller } from 'src/app/models/Conseiller';

@Component({
  selector: 'app-admin-demandeouverture-list',
  templateUrl: './admin-demandeouverture-list.component.html',
  styleUrls: ['./admin-demandeouverture-list.component.css']
})
export class AdminDemandeouvertureListComponent implements OnInit {

  demandes : Demande[];
  conseillers : Conseiller[];
  selectedValue = null;
  constructor(private adminService: AdminService) { 
    this.adminService.getListeConseillers().subscribe(
      reponse => {
        this.conseillers = reponse;
        console.log(this.conseillers[0]);
      }
    )
    this.adminService.getListeDemandesOuverture().subscribe(
      reponse => {
        this.demandes = reponse;
        console.log(this.demandes[0]);
      })
  }

  ngOnInit() {
    
   

    


  }

}
