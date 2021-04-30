import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EsapaceAdministratorComponent } from './esapace-administrator.component';

describe('EsapaceAdministratorComponent', () => {
  let component: EsapaceAdministratorComponent;
  let fixture: ComponentFixture<EsapaceAdministratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EsapaceAdministratorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EsapaceAdministratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
