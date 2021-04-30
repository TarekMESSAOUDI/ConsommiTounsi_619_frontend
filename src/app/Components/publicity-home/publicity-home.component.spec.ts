import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicityHomeComponent } from './publicity-home.component';

describe('PublicityHomeComponent', () => {
  let component: PublicityHomeComponent;
  let fixture: ComponentFixture<PublicityHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicityHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicityHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
