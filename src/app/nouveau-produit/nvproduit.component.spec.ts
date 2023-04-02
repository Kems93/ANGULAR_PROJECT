import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NvproduitComponent } from './nvproduit.component';

describe('NvproduitComponent', () => {
  let component: NvproduitComponent;
  let fixture: ComponentFixture<NvproduitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NvproduitComponent ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(NvproduitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
