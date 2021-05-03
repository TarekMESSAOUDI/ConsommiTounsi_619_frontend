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
  //deleteOrderURL:"localhost:9091/SpringMVC/servlet/delete-order/"
  //getAllOrderURL:"localhost:9091/SpringMVC/servlet/getAllOrder"
  getOrderByTypeURL:"localhost:9091/SpringMVC/servlet/getOrder_by_Type"
  

  constructor (private orderhttp: HttpClient, private router: Router) { }

  addOrder(o:Order){
    return this.orderhttp.post(this.addOrderURL,o);
  }


  public getAllOrder(){
    return this.orderhttp.get("http://localhost:9091/SpringMVC/servlet/getAllOrder");
  }

  public deleteOrder(idOrder: number) {
    return this.orderhttp.delete("http://localhost:9091/SpringMVC/servlet/delete-order/" + idOrder);
  }

 

  updateOrder(_id: number, value: any): Observable<any> {
    return this.orderhttp.put(this.modifyOrderURL, value);
  }

  getOrderByType(_paymentType: string): Observable<any> {
    return this.orderhttp.get(this.getOrderByTypeURL);
  }
  
}

