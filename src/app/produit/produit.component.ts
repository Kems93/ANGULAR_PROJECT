import { Component, OnInit } from '@angular/core';
import { ProduitsService } from '../produits.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from '../../client.model';
import { PanierService } from '../panier.service';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css'],
  providers: [ProduitsService]
})
export class ProduitComponent implements OnInit {
  produit: any;
  client: any;

  constructor(
    private produitsService: ProduitsService,
    private route: ActivatedRoute,
    private router: Router,
    private panierService: PanierService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      this.produitsService.getProduitById(id).subscribe((result) => {
        this.produit = result;
      });
    });
  }

  checkAdmin(user: string): boolean {
    var a = localStorage.getItem(user);
    if (a) {
      // @ts-ignore
      this.client = JSON.parse(a);
      return this.client.admin == 1 ? true : false;
    }
    return false;
  }

  suppProduit(): any {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      this.produitsService.suppProduit(id).subscribe(() => {
        this.router.navigate(['/']);
      });
    });
  }

  ajouterAuPanier(quantiteInput: HTMLInputElement): void {
    const quantite = parseInt(quantiteInput.value, 10);
    console.log('Produit et quantité à ajouter', this.produit, quantite);
    this.panierService.ajouterAuPanier({ produit: this.produit, quantite });
  }

}
