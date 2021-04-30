import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EsapaceClientComponent } from './esapace-client.component';

describe('EsapaceClientComponent', () => {
  let component: EsapaceClientComponent;
  let fixture: ComponentFixture<EsapaceClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EsapaceClientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EsapaceClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
