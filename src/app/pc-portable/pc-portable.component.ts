import { Component, OnInit } from '@angular/core';
import { ProduitsService } from '../produits.service';

@Component({
  selector: 'app-pc-portable',
  templateUrl: './pc-portable.component.html',
  styleUrls: ['./pc-portable.component.css'],
  providers: [ProduitsService]
})
export class PcPortableComponent implements OnInit {
  pcPortables: any[] = [];

  constructor(private produitsService: ProduitsService) { }

  ngOnInit(): void {
    this.getPcPortables();
  }

  getPcPortables(): void {
    this.produitsService.getPcPortable()
      .subscribe(pcPortables => {
        this.pcPortables = pcPortables;
      });
  }
}
