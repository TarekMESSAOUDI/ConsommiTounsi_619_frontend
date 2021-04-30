import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductAdministratorComponent } from './product-administrator.component';

describe('ProductAdministratorComponent', () => {
  let component: ProductAdministratorComponent;
  let fixture: ComponentFixture<ProductAdministratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductAdministratorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductAdministratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
