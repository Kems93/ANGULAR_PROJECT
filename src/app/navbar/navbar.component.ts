import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  client : any;
  checkConnexion(user: string): boolean {
    return localStorage.getItem(user) ? true : false;
  }

  checkAdmin(user: string): boolean {
    var a=localStorage.getItem(user);
    if(a){
      // @ts-ignore
      this.client=JSON.parse(a);
      return this.client.admin == 1 ? true : false;
    }
    return false;
  }

  logout(user: string): void {
    localStorage.removeItem(user);
  }
}
