import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaimAdministratorComponent } from './claim-administrator.component';

describe('ClaimAdministratorComponent', () => {
  let component: ClaimAdministratorComponent;
  let fixture: ComponentFixture<ClaimAdministratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClaimAdministratorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClaimAdministratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
