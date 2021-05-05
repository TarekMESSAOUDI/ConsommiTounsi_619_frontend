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

  addOrderURL:"localhost:9091/SpringMVC/servlet/add-order";
  modifyOrderURL:"localhost:9091/SpringMVC/servlet/modify-order";
  //deleteOrderURL:"localhost:9091/SpringMVC/servlet/delete-order/"
  //getAllOrderURL:"localhost:9091/SpringMVC/servlet/getAllOrder"
  getOrderByTypeURL:"localhost:9091/SpringMVC/servlet/getOrder_by_Type"
  ShowPDFByIdBillURL = "http://localhost:9091/SpringMVC/servlet/showPDF";
  

  constructor (private orderhttp: HttpClient, private router: Router) { }

  addOrder(order : Order){
    return this.orderhttp.post<ApiResponse>(this.addOrderURL, {});
  }


  public getAllOrder():Observable<Order[]>{
    return this.orderhttp.get<Order[]>("http://localhost:9091/SpringMVC/servlet/getAllOrder");
  }

  public deleteOrder(idOrder: number) {
    return this.orderhttp.delete("http://localhost:9091/SpringMVC/servlet/delete-order/" + idOrder);
  }

 

  updateOrder(order : Order): Observable<any> {
    return this.orderhttp.put(this.modifyOrderURL, order);
  }

  getOrderByType(_paymentType: string): Observable<any> {
    return this.orderhttp.get(this.getOrderByTypeURL);
  }

  showPdf(idOrder: number): Observable<any> {
    return this.orderhttp.get(this. ShowPDFByIdBillURL);
  }
  
}

