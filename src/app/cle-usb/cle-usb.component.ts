import { Component, OnInit } from '@angular/core';
import { ProduitsService } from '../produits.service';

@Component({
  selector: 'app-cle-usb',
  templateUrl: './cle-usb.component.html',
  styleUrls: ['./cle-usb.component.css'],
  providers: [ProduitsService]
})
export class CleUsbComponent implements OnInit {
  produits: any[] = [];

  constructor(private produitsService: ProduitsService) { }

  ngOnInit(): void {
    this.getCleUsb();
  }

  getCleUsb(): void {
    this.produitsService.getCleUsb()
      .subscribe(cles => {
        this.produits = cles;
      });
  }
}
