import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CagnotteClientComponent } from './cagnotte-client.component';

describe('CagnotteClientComponent', () => {
  let component: CagnotteClientComponent;
  let fixture: ComponentFixture<CagnotteClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CagnotteClientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CagnotteClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
