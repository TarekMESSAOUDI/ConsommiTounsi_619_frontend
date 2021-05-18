import { HttpClient } from '@angular/common/http';
import { jsDocComment } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from 'src/app/Models/Product';
import { Basket } from '../../Models/Basket';

@Injectable({
  providedIn: 'root',
})
export class BasketService {
  cartItems: any = [];
  numOfItems = new BehaviorSubject([]);
  cartiteeems = new BehaviorSubject([]);
  placeholder = [];
  
  addBasketURL = 'http://localhost:9091/SpringMVC/servlet/add-basket';
  deletBasketURL = 'http://localhost:9091/SpringMVC/servlet/delet-basket';
  affectBasketURL =
    'http://localhost:9091/SpringMVC/servlet/affect-basket-to-user';
  getmoyAmountBasketURL =
    'http://localhost:9091/SpringMVC/servlet/get-moy-AmountBasket';
  gettotalAmountBasketURL =
    'http://localhost:9091/SpringMVC/servlet/get-total-AmountBasket';
  getmaxAmountBasketURL =
    'http://localhost:9091/SpringMVC/servlet/get-max-AmountBasket';
  getcountBasketURL =
    'http://localhost:9091/SpringMVC/servlet/get-count-Basket';
  getecartamountBasketURL =
    'http://localhost:9091/SpringMVC/servlet/get-ecart-amountBasket';

  constructor(private baskethttp: HttpClient) {
    const ls = JSON.parse(localStorage.getItem('cart'));
  }

  addBasket(basket: Basket): Observable<any> {
    return this.baskethttp.post(this.addBasketURL, basket);
  }

  deleteBasket(id: number): Observable<any> {
    return this.baskethttp.delete(this.deletBasketURL, {
      responseType: 'text',
    });
  }

  affectBasketToClient(basket: Basket): Observable<any> {
    return this.baskethttp.post(this.affectBasketURL, basket);
  }

  getMoyAmountBasket(): Observable<any> {
    return this.baskethttp.get(this.getmoyAmountBasketURL);
  }

  getTotalAmountBasket(): Observable<any> {
    return this.baskethttp.get(this.gettotalAmountBasketURL);
  }

  getmaxAmountBasket(): Observable<any> {
    return this.baskethttp.get(this.getmaxAmountBasketURL);
  }

  getcountBasket(): Observable<any> {
    return this.baskethttp.get(this.getcountBasketURL);
  }

  getecartamountBasket(): Observable<any> {
    return this.baskethttp.get(this.getecartamountBasketURL);
  }

  //ADD TO CHART SERVICE

  addToCart(product: Product) {
    console.log(product);
    let data = JSON.parse(localStorage.getItem('cart'));
    if (data === null) {
      let storeData: any = [];
      storeData.push(product);
      localStorage.setItem('cart', JSON.stringify(storeData));
      
    } else {
      var id = product.idProduct;
      let index: number = -1;
      this.cartItems = JSON.parse(localStorage.getItem('cart'));
      for (let i = 0; i < this.cartItems.length; i++) {
        if (id === this.cartItems[i].idProduct) {
          this.cartItems[i].quantityProduct = product.quantityProduct;
          index = i;
          break;
        }
      }
      if (index === -1) {
        this.cartItems.push(product);
        localStorage.setItem('cart', JSON.stringify(this.cartItems));
      } else {
        localStorage.setItem('cart', JSON.stringify(this.cartItems));
      }
    }
  }
}
