import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // Import de HttpClientModule

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PcPortableComponent } from './pc-portable/pc-portable.component';
import { PcDeBureauComponent } from './pc-de-bureau/pc-de-bureau.component';
import { AccessoirePcComponent } from './accessoire-pc/accessoire-pc.component';
import { SmartphoneComponent } from './smartphone/smartphone.component';
import { TelFixeComponent } from './tel-fixe/tel-fixe.component';
import { AccessoireTelComponent } from './accessoire-tel/accessoire-tel.component';
import { DisqueDurComponent } from './disque-dur/disque-dur.component';
import { CleUsbComponent } from './cle-usb/cle-usb.component';
import { AccessoireStockageComponent } from './accessoire-stockage/accessoire-stockage.component';
import { AccueilComponent } from './accueil/accueil.component';
import { ReactiveFormsModule } from '@angular/forms';


import { FormsModule } from '@angular/forms';
import { ConnexionComponent } from './connexion/connexion.component';
import {FooterComponent} from "./footer/footer.component";



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PcPortableComponent,
    PcDeBureauComponent,
    AccessoirePcComponent,
    SmartphoneComponent,
    TelFixeComponent,
    AccessoireTelComponent,
    DisqueDurComponent,
    CleUsbComponent,
    AccessoireStockageComponent,
    AccueilComponent,
    ConnexionComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, // Ajout de HttpClientModule dans la liste des imports
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
