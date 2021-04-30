import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentAdministratorComponent } from './department-administrator.component';

describe('DepartmentAdministratorComponent', () => {
  let component: DepartmentAdministratorComponent;
  let fixture: ComponentFixture<DepartmentAdministratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepartmentAdministratorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentAdministratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
