import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/Models/Product';
import { ProductService } from 'src/app/Services/product/product.service';
import { Articulo } from '../../model/articulo';
import { ArticuloService } from '../articulo.service';



@Component({
  selector: 'app-lista-articulo',
  templateUrl: './lista-articulo.component.html',
  styleUrls: ['./lista-articulo.component.css']
})
export class ListaArticuloComponent implements OnInit {

  product: Product[]= [];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.cargarLista();
  }

  

  cargarLista(): void {
    this.productService.lista().subscribe(
      data => {
        this.product = data;
      },
      err => {
        console.log(err);
      }
    );
  }

}
