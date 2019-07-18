import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InscriptionComponent } from './inscription/inscription.component';
import { AdminMainMenuComponent } from './admin/admin-main-menu/admin-main-menu.component';
import { ConseillerConnectComponent } from './conseiller/conseiller-connect/conseiller-connect.component';
import { ConseillerInfoComponent } from './conseiller/conseiller-info/conseiller-info.component';
import { ConseillerRequeteListComponent } from './conseiller/conseiller-requete-list/conseiller-requete-list.component';
import { ConseillerDemandeouvertureListComponent } from './conseiller/conseiller-demandeouverture-list/conseiller-demandeouverture-list.component';

const routes: Routes = [
  { path:'', component: InscriptionComponent},
  { path:'admin', component: AdminMainMenuComponent},
  { path:'conseiller', component: ConseillerInfoComponent},
  { path:'conseiller/requetes', component: ConseillerRequeteListComponent},
  { path:'conseiller/demandes', component: ConseillerDemandeouvertureListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
