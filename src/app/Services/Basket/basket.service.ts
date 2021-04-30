import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Basket } from '../../Models/Basket';

@Injectable({
  providedIn: 'root'
})
export class BasketService {

  addBasketURL = "http://localhost:9091/SpringMVC/servlet/add-basket";
  deletBasketURL = "http://localhost:9091/SpringMVC/servlet/delet-basket";
  affectBasketURL = "http://localhost:9091/SpringMVC/servlet/affect-basket-to-user";
  getmoyAmountBasketURL = "http://localhost:9091/SpringMVC/servlet/get-moy-AmountBasket";
  gettotalAmountBasketURL = "http://localhost:9091/SpringMVC/servlet/get-total-AmountBasket";
  getmaxAmountBasketURL = "http://localhost:9091/SpringMVC/servlet/get-max-AmountBasket";
  getcountBasketURL = "http://localhost:9091/SpringMVC/servlet/get-count-Basket";
  getecartamountBasketURL = "http://localhost:9091/SpringMVC/servlet/get-ecart-amountBasket";

  constructor(private baskethttp: HttpClient, private router: Router) { }

  addBasket(basket: Basket): Observable<any> {
    return this.baskethttp.post(this.addBasketURL, basket);
  }

  deleteBasket(id: number): Observable<any> {
    return this.baskethttp.delete(this.deletBasketURL, { responseType: 'text' });
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
}
