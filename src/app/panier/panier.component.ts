import { Component, OnInit } from '@angular/core';
import { Produit } from '../produit.model';
import { PanierService } from '../panier.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {
  produits: { produit: Produit, quantite: number }[] = [];
  private panierSubscription: Subscription = new Subscription();

  constructor(private panierService: PanierService) { }

  ngOnInit(): void {
    this.produits = this.panierService.getProduits();
    this.panierSubscription = this.panierService.getPanierUpdates().subscribe((produits) => {
      console.log('Mise à jour du panier', produits)
      this.produits = produits;
    });
  }

  ngOnDestroy(): void {
    if (this.panierSubscription) {
      this.panierSubscription.unsubscribe();
    }
  }

  ajouterAuPanier(quantite: number, produit: Produit): void {
    this.panierService.ajouterAuPanier({ produit, quantite });
  }


  enleverDuPanier(produit: { produit: Produit, quantite: number }): void {
    this.panierService.enleverDuPanier(produit);
  }

  viderPanier(): void {
    this.panierService.viderPanier();
  }
  getTotal(): number {
    let total = 0;
    for (const produit of this.produits) {
      total += produit.produit.prix * produit.quantite;
    }
    return total;
  }
  checkConnexion(user: string): boolean {
    return localStorage.getItem(user) ? true : false;
  }
}
