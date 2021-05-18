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
  removeProduct() {
    localStorage.removeItem('cart');
    window.location.reload();
  }

  getproduct(id) {
    if (localStorage.getItem('cart')) {
      this.listCartHere = JSON.parse(localStorage.getItem('cart'));
      for (let i = 0; i < this.listCartHere.length; i++) {
        if (this.listCartHere[i].idProduct === id) {
          this.listCartHere.splice(i, 1);
          localStorage.setItem('cart', JSON.stringify(this.listCartHere));
          window.location.reload();
        }
      }
    }
  }
}

// getCartDetails: any[];
// cartDetails() {
//   if (localStorage.getItem('cart')) {
//     this.getCartDetails = JSON.parse(localStorage.getItem('cart'));
//   }
// }

// removeSingleProduct(product:Product) {
//   console.log(product);
//   if (localStorage.getItem('cart')) {
//     this.getCartDetails = JSON.parse(localStorage.getItem('cart'));
//     for (let i = 0; i < this.getCartDetails.length; i++) {
//       if (this.getCartDetails[i].idProduct === this.getCartDetails) {
//         this.getCartDetails.splice(i, 1);
//         localStorage.setItem('cart', JSON.stringify(this.getCartDetails));
//       }
//     }
//   }
// }
