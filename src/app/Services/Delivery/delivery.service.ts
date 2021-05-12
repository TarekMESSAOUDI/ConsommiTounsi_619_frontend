import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Delivery } from 'src/app/Models/Delivery';
@Injectable({
  providedIn: 'root'
})
export class DeliveryService {
  addDeliveryURL="http://localhost:9091/SpringMVC/servlet/addDelivery";
  retrievealldeliveryURL="http://localhost:9091/SpringMVC/servlet/retrievealldelivery";
  retrievedeliveryURL="http://localhost:9091/SpringMVC/servlet/retrievedelivery";
  deletedeliveryURL="http://localhost:9091/SpringMVC/servlet";
  updatedeliveryURL="http://localhost:9091/SpringMVC/servlet/modify-delivery";
  affectdeliveryTodeliveryPersonURL="http://localhost:9091/SpringMVC/servlet/affect-Delivery-to-DeliveryPerson";
  constructor(private deliveryhttp: HttpClient, private router: Router) { }

  addDelivery(delivery: Delivery): Observable<any> {
    return this.deliveryhttp.post(this.addDeliveryURL, delivery);
  }

  retrievealldelivery(): Observable<any> {
    return this.deliveryhttp.get(this.retrievealldeliveryURL);
  }
  retrievedelivery(id:number):Observable<any>{
    return this.deliveryhttp.get(this.retrievedeliveryURL);
  }

  deletedelivery(id: number): Observable<any> {
    return this.deliveryhttp.delete(`${this.deletedeliveryURL}/remove-delivery/${id}`, { responseType: 'text' });
  }

  updatedelivery(id: number, value: any): Observable<any> {
    return this.deliveryhttp.put(this.updatedeliveryURL, value);
  }

  affectdeliveryTodeliveryPerson(delivery: Delivery): Observable<any> {
    return this.deliveryhttp.post(this.affectdeliveryTodeliveryPersonURL, delivery);
  }

}
