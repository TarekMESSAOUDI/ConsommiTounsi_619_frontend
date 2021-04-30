import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventHomeComponent } from './event-home.component';

describe('EventHomeComponent', () => {
  let component: EventHomeComponent;
  let fixture: ComponentFixture<EventHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
