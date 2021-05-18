import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/Models/Product';
import { ProductService } from 'src/app/Services/product/product.service';
import { Articulo } from '../../model/articulo';
import { ArticuloService } from '../articulo.service';

@Component({
  selector: 'app-detalle-articulo',
  templateUrl: './detalle-articulo.component.html',
  styleUrls: ['./detalle-articulo.component.css']
})
export class DetalleArticuloComponent implements OnInit {

  product : Product;

  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.cargarArticulo();
  }

  cargarArticulo(): void {
    const id = this.activatedRoute.snapshot.params.id;
    this.productService.detalle(id).subscribe(
      data => {
        this.product = data;
      },
      err => {
        console.log(err);
      }
    );
  }

}
