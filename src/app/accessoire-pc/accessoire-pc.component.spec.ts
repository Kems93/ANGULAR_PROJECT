import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessoirePcComponent } from './accessoire-pc.component';

describe('AccessoirePcComponent', () => {
  let component: AccessoirePcComponent;
  let fixture: ComponentFixture<AccessoirePcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccessoirePcComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccessoirePcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
