import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CagnotteAdministratorComponent } from './cagnotte-administrator.component';

describe('CagnotteAdministratorComponent', () => {
  let component: CagnotteAdministratorComponent;
  let fixture: ComponentFixture<CagnotteAdministratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CagnotteAdministratorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CagnotteAdministratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
