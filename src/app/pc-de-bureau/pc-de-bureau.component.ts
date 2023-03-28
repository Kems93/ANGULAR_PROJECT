import { Component, OnInit } from '@angular/core';
import { ProduitsService } from '../produits.service';

@Component({
  selector: 'app-pc-de-bureau',
  templateUrl: './pc-de-bureau.component.html',
  styleUrls: ['./pc-de-bureau.component.css'],
  providers: [ProduitsService]
})
export class PcDeBureauComponent implements OnInit {
  pcBureaux: any[] = [];

  constructor(private produitsService: ProduitsService) { }

  ngOnInit(): void {
    this.getPcBureaux();
  }

  getPcBureaux(): void {
    this.produitsService.getPcBureau()
      .subscribe(pcBureaux => {
        this.pcBureaux = pcBureaux;
      });
  }
}
