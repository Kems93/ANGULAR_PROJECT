import { Component, OnInit } from '@angular/core';
import { ProduitsService } from '../produits.service';

@Component({
  selector: 'app-smartphone',
  templateUrl: './smartphone.component.html',
  styleUrls: ['./smartphone.component.css'],
  providers: [ProduitsService]
})
export class SmartphoneComponent implements OnInit {
  produits: any[] = [];

  constructor(private produitsService: ProduitsService) { }

  ngOnInit(): void {
    this.getSmartphones();
  }

  getSmartphones(): void {
    this.produitsService.getSmartphones()
      .subscribe(smartphones => {
        this.produits = smartphones;
        console.log(smartphones)
      });
  }
}
