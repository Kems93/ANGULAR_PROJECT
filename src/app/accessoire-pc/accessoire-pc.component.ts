import { Component, OnInit } from '@angular/core';
import { ProduitsService } from '../produits.service';

@Component({
  selector: 'app-accessoire-pc',
  templateUrl: './accessoire-pc.component.html',
  styleUrls: ['./accessoire-pc.component.css'],
  providers: [ProduitsService]
})
export class AccessoirePcComponent implements OnInit {
  produits: any[] = [];

  constructor(private produitsService: ProduitsService) { }

  ngOnInit(): void {
    this.getAccessoiresPc();
  }

  getAccessoiresPc(): void {
    this.produitsService.getPcAccessoires()
      .subscribe(accessoires => {
        this.produits = accessoires;
        console.log(accessoires)
      });
  }
}
