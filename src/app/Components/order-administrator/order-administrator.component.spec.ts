import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderAdministratorComponent } from './order-administrator.component';

describe('OrderAdministratorComponent', () => {
  let component: OrderAdministratorComponent;
  let fixture: ComponentFixture<OrderAdministratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderAdministratorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderAdministratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
