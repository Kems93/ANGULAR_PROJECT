import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from '../users.service';
import { Client } from 'src/client.model';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css'],
})
export class ConnexionComponent {
  constructor(
    private usersService: UsersService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  userForm: FormGroup = this.fb.group({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  onSubmit() {
    this.usersService
      .findClientByEmail(this.userForm.controls['email'].value) // Assurez-vous d'avoir une méthode findClientByEmail() dans votre service.
      .subscribe((client: Client) => {
        if (client && client.motdepasse === this.userForm.controls['password'].value) {
          // Authentification réussie, stocker les informations de l'utilisateur et rediriger
          localStorage.setItem('client', JSON.stringify(client));
          if (history.state && history.state.navigationId > 1) {
            history.back();
          } else {
            this.router.navigate(['/']);
          }
        } else {
          // Authentification échouée, afficher un message d'erreur
          console.log('Échec de l\'authentification');
          location.reload();
        }
      });
      console.log('Email:', this.userForm.controls['email'].value);
      console.log('Password:', this.userForm.controls['password'].value);
  }
}
