import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicityAdministratorComponent } from './publicity-administrator.component';

describe('PublicityAdministratorComponent', () => {
  let component: PublicityAdministratorComponent;
  let fixture: ComponentFixture<PublicityAdministratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicityAdministratorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicityAdministratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
