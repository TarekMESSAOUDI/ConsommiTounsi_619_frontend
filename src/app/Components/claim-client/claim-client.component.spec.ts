import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaimClientComponent } from './claim-client.component';

describe('ClaimClientComponent', () => {
  let component: ClaimClientComponent;
  let fixture: ComponentFixture<ClaimClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClaimClientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClaimClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
