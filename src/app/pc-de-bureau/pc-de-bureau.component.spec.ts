import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PcDeBureauComponent } from './pc-de-bureau.component';

describe('PcDeBureauComponent', () => {
  let component: PcDeBureauComponent;
  let fixture: ComponentFixture<PcDeBureauComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PcDeBureauComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PcDeBureauComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
