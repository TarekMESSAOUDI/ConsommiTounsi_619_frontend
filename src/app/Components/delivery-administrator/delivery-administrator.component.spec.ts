import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryAdministratorComponent } from './delivery-administrator.component';

describe('DeliveryAdministratorComponent', () => {
  let component: DeliveryAdministratorComponent;
  let fixture: ComponentFixture<DeliveryAdministratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeliveryAdministratorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliveryAdministratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
