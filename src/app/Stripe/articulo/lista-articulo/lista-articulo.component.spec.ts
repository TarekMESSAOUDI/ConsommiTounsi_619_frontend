import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaArticuloComponent } from './lista-articulo.component';

describe('ListaArticuloComponent', () => {
  let component: ListaArticuloComponent;
  let fixture: ComponentFixture<ListaArticuloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaArticuloComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaArticuloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
