import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillClientComponent } from './bill-client.component';

describe('BillClientComponent', () => {
  let component: BillClientComponent;
  let fixture: ComponentFixture<BillClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BillClientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BillClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
