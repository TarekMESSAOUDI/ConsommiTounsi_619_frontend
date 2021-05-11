
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/Models/Product';
import { ProductService } from 'src/app/Services/product/product.service';
@Component({
  selector: 'app-basket-client',
  templateUrl: './basket-client.component.html',
  styleUrls: ['./basket-client.component.css']
})
export class BasketClientComponent implements OnInit {
  
  id: number;
  title: string;
  description: string;
  price: number;
  quantity: number;
  buyingPriceProduct: number;
  image: string;
  constructor(private route: ActivatedRoute, private router: Router, private prodService: ProductService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.title = this.route.snapshot.params.titleProduct;
    this.description = this.route.snapshot.params.descriptionProduct;
    this.price = this.route.snapshot.params.buyingPriceProduct
    this.quantity = this.route.snapshot.params.quantityProduct
    this.image = this.route.snapshot.params.fileName
    

  }

}
