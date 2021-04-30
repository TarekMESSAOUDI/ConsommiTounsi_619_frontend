import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesDepartmentManagerComponent } from './sales-department-manager.component';

describe('SalesDepartmentManagerComponent', () => {
  let component: SalesDepartmentManagerComponent;
  let fixture: ComponentFixture<SalesDepartmentManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalesDepartmentManagerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesDepartmentManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
