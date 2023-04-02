import { Injectable } from '@angular/core';
import { Produit } from './produit.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PanierService {
  private produits: { produit: Produit, quantite: number }[] = [];
  private panierSubject = new BehaviorSubject<{ produit: Produit, quantite: number }[]>([]);

  constructor() { }

  ajouterAuPanier(produitQuantite: { produit: Produit, quantite: number }): void {
    const { produit, quantite } = produitQuantite;
    const produitExistant = this.produits.find(p => p.produit.id === produit.id);

    if (produitExistant) {
      produitExistant.quantite += quantite;
    } else {
      this.produits.push({ produit, quantite });
    }
    console.log('Produit ajouté', this.produits);

    this.panierSubject.next(this.produits);
  }


  enleverDuPanier(produitQuantite: { produit: Produit, quantite: number }): void {
    const { produit, quantite } = produitQuantite;
    const index = this.produits.findIndex(p => p.produit.id === produit.id);

    if (index !== -1) {
      const produitExistant = this.produits[index];
      if (produitExistant.quantite > quantite) {
        produitExistant.quantite -= quantite;
      } else {
        this.produits.splice(index, 1);
      }
    }
    console.log('Produit retiré', this.produits);

    this.panierSubject.next(this.produits);
  }


  viderPanier(): void {
    this.produits = [];

    console.log('Panier vidé', this.produits);
    this.panierSubject.next(this.produits);
  }


  getProduits(): { produit: Produit, quantite: number }[] {
    return this.produits;
  }

  getPanierUpdates() {
    return this.panierSubject.asObservable();
  }
}
