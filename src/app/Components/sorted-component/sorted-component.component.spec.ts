import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortedComponentComponent } from './sorted-component.component';

describe('SortedComponentComponent', () => {
  let component: SortedComponentComponent;
  let fixture: ComponentFixture<SortedComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SortedComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SortedComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
