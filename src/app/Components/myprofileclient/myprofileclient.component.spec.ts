import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyprofileclientComponent } from './myprofileclient.component';

describe('MyprofileclientComponent', () => {
  let component: MyprofileclientComponent;
  let fixture: ComponentFixture<MyprofileclientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyprofileclientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyprofileclientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
