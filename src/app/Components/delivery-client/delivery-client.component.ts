import { Component, OnInit } from '@angular/core';
import { Delivery } from 'src/app/Models/Delivery';
import { Status } from 'src/app/Models/Status';
import { DeliveryService } from 'src/app/Services/Delivery/delivery.service';


@Component({
  selector: 'app-delivery-client',
  templateUrl: './delivery-client.component.html',
  styleUrls: ['./delivery-client.component.css']
})
export class DeliveryClientComponent implements OnInit {
  delivery : Delivery=new Delivery();
  showfreedelivery:boolean;
  showdelivery:boolean;
  msg = '';
  constructor(private Ds:DeliveryService) { }

  ngOnInit(): void {
  }
  addDelivery() { 
    this.delivery.status = Status.IN_PROGRESS
    this.Ds.addDelivery(this.delivery).subscribe(
      data => {
        console.log(data),
          this.showdeliveryinterface();
          this.msg = 'delivery is confirmed';},
      (error) => {
        console.log(error);
      });

  }
    showfreedeliveryinterface(){
      this.showfreedelivery=true;
      this.showdelivery=false;   
    }


    showdeliveryinterface(){
this.showdelivery=true;
this.showfreedelivery=false;

    }
  }

