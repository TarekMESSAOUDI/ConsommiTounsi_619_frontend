import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentDepartmentManagerComponent } from './department-department-manager.component';

describe('DepartmentDepartmentManagerComponent', () => {
  let component: DepartmentDepartmentManagerComponent;
  let fixture: ComponentFixture<DepartmentDepartmentManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepartmentDepartmentManagerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentDepartmentManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
