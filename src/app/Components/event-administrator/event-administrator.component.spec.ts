import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventAdministratorComponent } from './event-administrator.component';

describe('EventAdministratorComponent', () => {
  let component: EventAdministratorComponent;
  let fixture: ComponentFixture<EventAdministratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventAdministratorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventAdministratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
