import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatisticAdministratorComponent } from './statistic-administrator.component';

describe('StatisticAdministratorComponent', () => {
  let component: StatisticAdministratorComponent;
  let fixture: ComponentFixture<StatisticAdministratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatisticAdministratorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatisticAdministratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
