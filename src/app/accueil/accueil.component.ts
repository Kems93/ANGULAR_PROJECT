import {Component, OnInit} from '@angular/core';
import {ProduitsService} from "../produits.service";

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit{
  produits: any[] = [];

  constructor(private produitsService: ProduitsService) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(): void {
    this.produitsService.getAll()
      .subscribe(all => {
        this.produits = all;
      });
  }
}
