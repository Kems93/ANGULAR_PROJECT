import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessoireTelComponent } from './accessoire-tel.component';

describe('AccessoireTelComponent', () => {
  let component: AccessoireTelComponent;
  let fixture: ComponentFixture<AccessoireTelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccessoireTelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccessoireTelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
