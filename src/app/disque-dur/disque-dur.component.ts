import { Component, OnInit } from '@angular/core';
import { ProduitsService } from '../produits.service';

@Component({
  selector: 'app-disque-dur',
  templateUrl: './disque-dur.component.html',
  styleUrls: ['./disque-dur.component.css'],
  providers: [ProduitsService]
})
export class DisqueDurComponent implements OnInit {
  produits: any[] = [];

  constructor(private produitsService: ProduitsService) { }

  ngOnInit(): void {
    this.getDisqueDur();
  }

  getDisqueDur(): void {
    this.produitsService.getDisqueDur()
      .subscribe(disques => {
        this.produits = disques;
      });
  }
}
