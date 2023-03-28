import { Component, OnInit } from '@angular/core';
import { ProduitsService } from '../produits.service';

@Component({
  selector: 'app-accessoire-tel',
  templateUrl: './accessoire-tel.component.html',
  styleUrls: ['./accessoire-tel.component.css'],
  providers: [ProduitsService]
})
export class AccessoireTelComponent implements OnInit {
  accessoires: any[] = [];

  constructor(private produitsService: ProduitsService) { }

  ngOnInit(): void {
    this.getAccessoiresTel();
  }

  getAccessoiresTel(): void {
    this.produitsService.getTelephoneAccessoires()
      .subscribe(accessoires => {
        this.accessoires = accessoires;
      });
  }
}
