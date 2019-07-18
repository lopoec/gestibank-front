import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InscriptionComponent } from './inscription/inscription.component';
import { AdminMainMenuComponent } from './admin/admin-main-menu/admin-main-menu.component';

const routes: Routes = [
  {
    path: 'home', component: InscriptionComponent
  },
  {
    path: 'admin', component: AdminMainMenuComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
