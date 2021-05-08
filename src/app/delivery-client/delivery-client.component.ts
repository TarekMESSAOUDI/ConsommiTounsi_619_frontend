import { Component, OnInit } from '@angular/core';
import { Delivery } from '../Models/Delivery';
import { Status } from '../Models/Status';
import { DeliveryService } from '../Services/Delivery/delivery.service';

@Component({
  selector: 'app-delivery-client',
  templateUrl: './delivery-client.component.html',
  styleUrls: ['./delivery-client.component.css']
})
export class DeliveryClientComponent implements OnInit {
  delivery : Delivery=new Delivery();
  showfreedelivery:boolean;
  showdelivery:boolean;
  constructor(private Ds:DeliveryService) { }

  ngOnInit(): void {
  }
  addDelivery() { 
    this.delivery.status = Status.IN_PROGRESS
    this.Ds.addDelivery(this.delivery).subscribe(res=>{console.log(res);
    }
    );

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

