import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InscriptionComponent } from './inscription/inscription.component';
import { AdminMainMenuComponent } from './admin/admin-main-menu/admin-main-menu.component';
import { ConseillerConnectComponent } from './conseiller/conseiller-connect/conseiller-connect.component';

const routes: Routes = [
  { path:'home', component: InscriptionComponent},
  { path:'admin', component: AdminMainMenuComponent},
  { path:'conseiller', component: ConseillerConnectComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
