import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
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

  getProduitById(id: string | null): Observable<Object> {
    return this.http.get<Object>(this.url+`/${id}`);
  }
  suppProduit(id: string | null) : Observable<any> {
    return this.http.delete(this.url+`/${id}`);
  }
  ajoutProduit(formulaire : any) : Observable<any>{
    return this.http.post(this.url,formulaire,{
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded'
      })
    });
  }

  modifProduit(formulaire : any,id: string | null) : Observable<any>{
    console.log(formulaire);
    console.log(id);
    return this.http.put(this.url+`/${id}`,formulaire,{
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded'
      })
    });
  }

}
