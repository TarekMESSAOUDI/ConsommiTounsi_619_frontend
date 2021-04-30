import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComptabilityAdministratorComponent } from './comptability-administrator.component';

describe('ComptabilityAdministratorComponent', () => {
  let component: ComptabilityAdministratorComponent;
  let fixture: ComponentFixture<ComptabilityAdministratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComptabilityAdministratorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComptabilityAdministratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
