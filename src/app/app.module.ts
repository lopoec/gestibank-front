import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { AdminMainMenuComponent } from './admin/admin-main-menu/admin-main-menu.component';
import { ConseillerInfoComponent } from './conseiller/conseiller-info/conseiller-info.component';
import { ConseillerMainMenuComponent } from './conseiller/conseiller-main-menu/conseiller-main-menu.component';
import { ConseillerService } from './services/conseiller.service';
import { HttpClientModule } from '@angular/common/http';
import { ConseillerConnectComponent } from './conseiller/conseiller-connect/conseiller-connect.component';
import { ConseillerRequeteListComponent } from './conseiller/conseiller-requete-list/conseiller-requete-list.component';

@NgModule({
  declarations: [
    AppComponent,
    InscriptionComponent,
    AdminMainMenuComponent,
    ConseillerInfoComponent,
    ConseillerMainMenuComponent,
    ConseillerConnectComponent,
    ConseillerRequeteListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
