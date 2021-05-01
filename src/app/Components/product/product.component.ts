import { Component, OnInit } from '@angular/core';
import { Product } from '../../Models/Product';
import { ProductService } from '../../Services/product/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  

  constructor() { }

  ngOnInit(): void {}
  
    
}
