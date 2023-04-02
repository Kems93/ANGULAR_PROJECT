import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import { ProduitsService } from '../produits.service';


@Component({
  selector: 'app-modif-produit',
  templateUrl:'./modifproduit.component.html',
  styleUrls: ['./modifproduit.component.css'],
})

export class ModifproduitComponent implements OnInit {
  constructor(
    private produitService: ProduitsService,
    private formulaire: FormBuilder,
    private router: Router,
    private route : ActivatedRoute
    ){}
  produit: any;

  produitFormulaire: FormGroup = this.formulaire.group({
    nom : new FormControl('', Validators.required),
    description : new FormControl('', Validators.required),
    prix : new FormControl('', Validators.required),
    photo: new FormControl('', Validators.required),
  });

  onSubmit(): void {
    let body = new URLSearchParams();
    body.set('nom', this.produitFormulaire.controls['nom'].value);
    body.set('description', this.produitFormulaire.controls['description'].value);
    body.set('prix', this.produitFormulaire.controls['prix'].value);
    body.set('photo', this.produitFormulaire.controls['photo'].value);
    this.route.paramMap.subscribe((params) => {
    const id = params.get('id');
    this.produitService.modifProduit(body.toString(),id).subscribe(() => {
      this.router.navigate(['produits/'+id]);
    });
    });
  }
  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      this.produitService.getProduitById(id).subscribe((result) => {
        this.produit = result;
      });
    });
  }

}
