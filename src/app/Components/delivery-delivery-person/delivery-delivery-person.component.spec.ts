import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryDeliveryPersonComponent } from './delivery-delivery-person.component';

describe('DeliveryDeliveryPersonComponent', () => {
  let component: DeliveryDeliveryPersonComponent;
  let fixture: ComponentFixture<DeliveryDeliveryPersonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeliveryDeliveryPersonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliveryDeliveryPersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
