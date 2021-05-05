import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleArticuloComponent } from './detalle-articulo.component';

describe('DetalleArticuloComponent', () => {
  let component: DetalleArticuloComponent;
  let fixture: ComponentFixture<DetalleArticuloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleArticuloComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleArticuloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
