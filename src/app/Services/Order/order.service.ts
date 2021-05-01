import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Order } from 'src/app/Models/Order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  addOrderURL:"localhost:9091/SpringMVC/servlet/add-order";
  modifyOrderURL:"localhost:9091/SpringMVC/servlet/modify-order";
  deleteOrderURL:"localhost:9091/SpringMVC/servlet/delete-order"
  getAllOrderURL:"localhost:9091/SpringMVC/servlet/getAllOrder"
  getOrderByTypeURL:"localhost:9091/SpringMVC/servlet/getOrder_by_Type"
  

  constructor (private orderhttp: HttpClient, private router: Router) { }

  addorder(Order:Order){
    return this.orderhttp.post<Order>(this.addOrderURL,Order);
  }

  getAllOrder():Observable<Order[]>{
    return this.orderhttp.get<Order[]>(this.getAllOrderURL);
  }

  deletetOrderById(id:number){
    return this.orderhttp.delete(this.deleteOrderURL+id);
  }

  updateOrder(id: number, value: any): Observable<any> {
    return this.orderhttp.put(this.modifyOrderURL, value);
  }

  getOrderByType(paymentType: string): Observable<any> {
    return this.orderhttp.get(this.getOrderByTypeURL);
  }
  
}
