import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentClientComponent } from './department-client.component';

describe('DepartmentClientComponent', () => {
  let component: DepartmentClientComponent;
  let fixture: ComponentFixture<DepartmentClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepartmentClientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
