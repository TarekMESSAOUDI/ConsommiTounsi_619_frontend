import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesAdministratorComponent } from './sales-administrator.component';

describe('SalesAdministratorComponent', () => {
  let component: SalesAdministratorComponent;
  let fixture: ComponentFixture<SalesAdministratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalesAdministratorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesAdministratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
