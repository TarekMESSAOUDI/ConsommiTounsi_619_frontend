import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasketClientComponent } from './basket-client.component';

describe('BasketClientComponent', () => {
  let component: BasketClientComponent;
  let fixture: ComponentFixture<BasketClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasketClientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasketClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
