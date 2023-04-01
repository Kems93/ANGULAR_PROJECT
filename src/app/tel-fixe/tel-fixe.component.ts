import { Component, OnInit } from '@angular/core';
import { ProduitsService } from '../produits.service';

@Component({
  selector: 'app-tel-fixe',
  templateUrl: './tel-fixe.component.html',
  styleUrls: ['./tel-fixe.component.css'],
  providers: [ProduitsService]
})
export class TelFixeComponent implements OnInit {
  produits: any[] = [];

  constructor(private produitsService: ProduitsService) { }

  ngOnInit(): void {
    this.getTelephoneFixe();
  }

  getTelephoneFixe(): void {
    this.produitsService.getTelephoneFixe()
      .subscribe(telephonesFixes => {
        this.produits = telephonesFixes;
      });
  }
}
