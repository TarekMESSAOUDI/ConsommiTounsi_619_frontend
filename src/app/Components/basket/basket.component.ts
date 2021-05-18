import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/Models/Product';
import { BasketService } from 'src/app/Services/Basket/basket.service';
import { DatashareService } from 'src/app/Services/SharingData/datashare.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css'],
})
export class BasketComponent implements OnInit {
  listCartHere: any[];
  itemInCart: number;
  basket: any;
  price: number;
  constructor(
    private dataShare: DatashareService,
    private CartService: BasketService
  ) {}

  ngOnInit(): void {
    this.basket = JSON.parse(localStorage.getItem('cart'));
    this.itemInCart = this.basket.length;
    const reducer = (accumulator, currentValue) =>
      accumulator + currentValue.buyingPriceProduct;
    const total = this.basket.reduce(reducer, 0);
    this.price = total;
    console.log(this.price);
  }
 
}
