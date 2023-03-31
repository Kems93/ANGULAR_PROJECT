import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProduitsService {
  url = "http://localhost:8080/un_war/api/produits";

  constructor(private http: HttpClient) { }

  getAll(): Observable<Array<any>> {
    return this.http.get<Array<any>>(this.url);
  }

  getPcPortable(): Observable<Array<any>> {
    return this.http.get<Array<any>>(this.url + '?categorie=Ordinateurs&sousCategorie=Pc_Portable');
  }

  getPcBureau(): Observable<Array<any>> {
    return this.http.get<Array<any>>(this.url + '?categorie=Ordinateurs&sousCategorie=Pc_Bureau');
  }

  getPcAccessoires(): Observable<Array<any>> {
    return this.http.get<Array<any>>(this.url + '?categorie=Ordinateurs&sousCategorie=Accessoire');
  }

  getSmartphones(): Observable<Array<any>> {
    return this.http.get<Array<any>>(this.url + '?categorie=Telephonies&sousCategorie=Smartphone');
  }

  getTelephoneFixe(): Observable<Array<any>> {
    return this.http.get<Array<any>>(this.url + '?categorie=Telephonies&sousCategorie=Tel_fixe');
  }

  getTelephoneAccessoires(): Observable<Array<any>> {
    return this.http.get<Array<any>>(this.url + '?categorie=Telephonies&sousCategorie=Accessoire');
  }

  getDisqueDur(): Observable<Array<any>> {
    return this.http.get<Array<any>>(this.url + '?categorie=Stockage&sousCategorie=Disque_dur');
  }

  getCleUsb(): Observable<Array<any>> {
    return this.http.get<Array<any>>(this.url + '?categorie=Stockage&sousCategorie=Cle_usb');
  }

  getStockageAccessoire(): Observable<Array<any>> {
    return this.http.get<Array<any>>(this.url + '?categorie=Stockage&sousCategorie=Accessoire');
  }
}
