import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/Models/Product';
import { ProductService } from 'src/app/Services/product/product.service';

@Component({
  selector: 'app-product-department-manager',
  templateUrl: './product-department-manager.component.html',
  styleUrls: ['./product-department-manager.component.css']
})
export class ProductDepartmentManagerComponent implements OnInit {

  ListProducts:Product[];

  constructor(public prodSerivce: ProductService,
    private router: Router) { }

  ngOnInit(): void {

    this.prodSerivce.getAllProducts().subscribe((res) => {
      console.log(res);
      this.ListProducts = res;
    });
    

  }

}
