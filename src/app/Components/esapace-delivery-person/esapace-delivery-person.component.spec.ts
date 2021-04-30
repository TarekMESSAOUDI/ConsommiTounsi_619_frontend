import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EsapaceDeliveryPersonComponent } from './esapace-delivery-person.component';

describe('EsapaceDeliveryPersonComponent', () => {
  let component: EsapaceDeliveryPersonComponent;
  let fixture: ComponentFixture<EsapaceDeliveryPersonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EsapaceDeliveryPersonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EsapaceDeliveryPersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
