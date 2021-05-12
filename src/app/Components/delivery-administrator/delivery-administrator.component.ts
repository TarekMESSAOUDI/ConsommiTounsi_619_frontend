import { Component, OnInit } from '@angular/core';
import { Delivery } from 'src/app/Models/Delivery';
import { DeliveryService } from 'src/app/Services/Delivery/delivery.service';

@Component({
  selector: 'app-delivery-administrator',
  templateUrl: './delivery-administrator.component.html',
  styleUrls: ['./delivery-administrator.component.css']
})
export class DeliveryAdministratorComponent implements OnInit {
  ListDelivery:Delivery[];
  delivery:Delivery;
  constructor(private Ds:DeliveryService) { 
    this.Ds.retrievealldelivery().subscribe(res=>{console.log(res);
      this.ListDelivery=res});
  }

  ngOnInit(): void {
  }
  DeleteDelivery(id:number){
    this.Ds.deletedelivery(id).subscribe(()=>this.Ds.retrievealldelivery().subscribe(res=>{this. ListDelivery=res}));
  }

  AffecteDeliveryToDeliveryPerson(){
   // this.httpClientng
     // .put('http://localhost:9091/SpringMVC/servlet/affect-Delivery-to-DeliveryPerson', this.delivery)
      //.subscribe(
        //() => {
          //console.log('affectation terminé !');
        //},
        //(error) => {
          //console.log('Erreur ! : ' + error);
        //}
      //ng);
  }
}
