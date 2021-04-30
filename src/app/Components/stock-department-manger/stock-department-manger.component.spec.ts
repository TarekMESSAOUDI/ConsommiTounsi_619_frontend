import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockDepartmentMangerComponent } from './stock-department-manger.component';

describe('StockDepartmentMangerComponent', () => {
  let component: StockDepartmentMangerComponent;
  let fixture: ComponentFixture<StockDepartmentMangerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockDepartmentMangerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StockDepartmentMangerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
