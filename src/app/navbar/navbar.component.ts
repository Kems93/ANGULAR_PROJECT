import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  checkConnexion(user: string): boolean {
    return localStorage.getItem(user) ? true : false;
  }

  logout(user: string): void {
    localStorage.removeItem(user);
  }
}
