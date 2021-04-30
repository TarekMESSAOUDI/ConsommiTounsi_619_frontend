import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDepartmentManagerComponent } from './product-department-manager.component';

describe('ProductDepartmentManagerComponent', () => {
  let component: ProductDepartmentManagerComponent;
  let fixture: ComponentFixture<ProductDepartmentManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductDepartmentManagerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDepartmentManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
