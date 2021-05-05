import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsproductsComponent } from './detailsproducts.component';

describe('DetailsproductsComponent', () => {
  let component: DetailsproductsComponent;
  let fixture: ComponentFixture<DetailsproductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsproductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
