import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConnexionService {

  constructor(private http: HttpClient) { }

  postClient(form: any) {
    return this.http.post('http://localhost:8080/un_war/api/clients', form);
  }
}
