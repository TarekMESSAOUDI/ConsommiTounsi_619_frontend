import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockAdministratorComponent } from './stock-administrator.component';

describe('StockAdministratorComponent', () => {
  let component: StockAdministratorComponent;
  let fixture: ComponentFixture<StockAdministratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockAdministratorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StockAdministratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
