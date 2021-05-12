import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiResponse } from 'src/app/Models/api.response';
import { Order } from 'src/app/Models/Order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  

  constructor (private orderhttp: HttpClient, private router: Router) { }

  public addOrder(order:Order){
    return this.orderhttp.post<ApiResponse>("http://localhost:9091/SpringMVC/servlet/add-order", order);
  }

  public getAllOrder():Observable<Order[]>{
    return this.orderhttp.get<Order[]>("http://localhost:9091/SpringMVC/servlet/getAllOrder");
  }

  public deleteOrder(idOrder: number) {
    return this.orderhttp.delete("http://localhost:9091/SpringMVC/servlet/delete-order/" + idOrder);
  }

  public showPdf(idOrder : number) {
    return this.orderhttp.get("http://localhost:9091/SpringMVC/servlet/showPDF/" + idOrder);
  }

  updateOrder(order : Order): Observable<any> {
    return this.orderhttp.put<Order>("http://localhost:9091/SpringMVC/servlet/modify-order", order);
  }


  getOrder(id: number): Observable<any> {
    return this.orderhttp.get(`${"http://localhost:9091/SpringMVC/servlet/order"}/${id}`);
  }



  getOrderbyid(idOrder : number) {
    return this.orderhttp.get("http://localhost:9091/SpringMVC/servlet/getOrder_by_ID/" + idOrder);
  } 
  


}