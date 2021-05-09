import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondNavComponent } from './second-nav.component';

describe('SecondNavComponent', () => {
  let component: SecondNavComponent;
  let fixture: ComponentFixture<SecondNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
