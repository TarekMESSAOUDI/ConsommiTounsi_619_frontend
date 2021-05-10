import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryadministratorComponent } from './categoryadministrator.component';

describe('CategoryadministratorComponent', () => {
  let component: CategoryadministratorComponent;
  let fixture: ComponentFixture<CategoryadministratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryadministratorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryadministratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
