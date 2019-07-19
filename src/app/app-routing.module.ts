import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InscriptionComponent } from './inscription/inscription.component';
import { AdminMainMenuComponent } from './admin/admin-main-menu/admin-main-menu.component';
import { ConseillerConnectComponent } from './conseiller/conseiller-connect/conseiller-connect.component';
import { ConseillerInfoComponent } from './conseiller/conseiller-info/conseiller-info.component';
import { ConseillerRequeteListComponent } from './conseiller/conseiller-requete-list/conseiller-requete-list.component';
import { ConseillerDemandeouvertureListComponent } from './conseiller/conseiller-demandeouverture-list/conseiller-demandeouverture-list.component';
import { AuthService } from './services/auth.service';
import { AuthGuardService } from './services/auth-guard.service';
import { ConseillerPageAcceuilComponent } from './conseiller/conseiller-page-acceuil/conseiller-page-acceuil.component';



const routes: Routes = [
  { path:'', component: InscriptionComponent},
  { path:'admin', component: AdminMainMenuComponent},
  { path:'conseiller', component: ConseillerPageAcceuilComponent, canActivate: [AuthGuardService]},
  { path:'conseiller/connect', component: ConseillerConnectComponent},
  { path:'conseiller/requetes', component: ConseillerRequeteListComponent, canActivate: [AuthGuardService]},
  { path:'conseiller/demandes', component: ConseillerDemandeouvertureListComponent, canActivate: [AuthGuardService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
