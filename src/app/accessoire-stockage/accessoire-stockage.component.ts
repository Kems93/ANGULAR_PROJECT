import { Component, OnInit } from '@angular/core';
import { ProduitsService } from '../produits.service';

@Component({
  selector: 'app-accessoire-stockage',
  templateUrl: './accessoire-stockage.component.html',
  styleUrls: ['./accessoire-stockage.component.css'],
  providers: [ProduitsService]
})
export class AccessoireStockageComponent implements OnInit {
  produits: any[] = [];

  constructor(private produitsService: ProduitsService) { }

  ngOnInit(): void {
    this.getAccessoiresStockage();
  }

  getAccessoiresStockage(): void {
    this.produitsService.getStockageAccessoire()
      .subscribe(accessoires => {
        this.produits = accessoires;
      });
  }
}
