import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryClientComponent } from './delivery-client.component';

describe('DeliveryClientComponent', () => {
  let component: DeliveryClientComponent;
  let fixture: ComponentFixture<DeliveryClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeliveryClientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliveryClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
