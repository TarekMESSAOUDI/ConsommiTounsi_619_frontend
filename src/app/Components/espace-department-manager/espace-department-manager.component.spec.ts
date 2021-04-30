import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspaceDepartmentManagerComponent } from './espace-department-manager.component';

describe('EspaceDepartmentManagerComponent', () => {
  let component: EspaceDepartmentManagerComponent;
  let fixture: ComponentFixture<EspaceDepartmentManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EspaceDepartmentManagerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EspaceDepartmentManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
