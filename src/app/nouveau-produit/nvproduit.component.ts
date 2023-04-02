import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { ProduitsService } from '../produits.service';


@Component({
  selector: 'app-nouveau-produit',
  templateUrl:'./nvproduit.component.html',
  styleUrls: ['./nvproduit.component.css'],
})
export class NvproduitComponent implements OnInit {
  constructor(
    private produitService: ProduitsService,
    private formulaire: FormBuilder,
    private router: Router
  ) {}


  produitFormulaire: FormGroup = this.formulaire.group({
    nom : new FormControl('', Validators.required),
    description : new FormControl('', Validators.required),
    prix : new FormControl('', Validators.required),
    categorie : new FormControl('', Validators.required),
    sousCategorie : new FormControl('', Validators.required),
    photo: new FormControl('', Validators.required),
  });

  onSubmit(): void {
    let body = new URLSearchParams();
    body.set('nom', this.produitFormulaire.controls['nom'].value);
    body.set('description', this.produitFormulaire.controls['description'].value);
    body.set('prix', this.produitFormulaire.controls['prix'].value);
    body.set('categorie', this.produitFormulaire.controls['categorie'].value);
    body.set('sousCategorie', this.produitFormulaire.controls['sousCategorie'].value);
    body.set('photo', this.produitFormulaire.controls['photo'].value);
    this.produitService.ajoutProduit(body.toString()).subscribe(() => {
      this.router.navigate(['/']);
    });

  }
  ngOnInit(): void {

  }
}
