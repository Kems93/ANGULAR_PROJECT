import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccessoirePcComponent } from './accessoire-pc/accessoire-pc.component';
import { AccessoireStockageComponent } from './accessoire-stockage/accessoire-stockage.component';
import { AccessoireTelComponent } from './accessoire-tel/accessoire-tel.component';
import { AccueilComponent } from './accueil/accueil.component';
import { CleUsbComponent } from './cle-usb/cle-usb.component';
import { DisqueDurComponent } from './disque-dur/disque-dur.component';
import { PcDeBureauComponent } from './pc-de-bureau/pc-de-bureau.component';
import { PcPortableComponent } from './pc-portable/pc-portable.component';
import { SmartphoneComponent } from './smartphone/smartphone.component';
import { TelFixeComponent } from './tel-fixe/tel-fixe.component';
import { ConnexionComponent } from './connexion/connexion.component';
import {ProduitComponent} from "./produit/produit.component";


const routes: Routes = [
//{ path: '', redirectTo: '/home', pathMatch: 'full' },
{path: '', component:AccueilComponent},
{path: 'PCPortable', component:PcPortableComponent},
{path: 'PCBureau', component:PcDeBureauComponent},
{path: 'AccesoiresPC', component:AccessoirePcComponent},
{path: 'Smart', component:SmartphoneComponent},
{path: 'TelF', component:TelFixeComponent},
{path: 'AccessTel', component:AccessoireTelComponent},
{path: 'Disque', component:DisqueDurComponent},
{path: 'Cle', component:CleUsbComponent},
{path: 'AccesStoc', component:AccessoireStockageComponent},
{path: 'Connexion', component:ConnexionComponent},
{path: 'produits/:id', component:ProduitComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
