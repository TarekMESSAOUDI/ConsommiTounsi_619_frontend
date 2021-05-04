import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/Models/Order';
import { OrderService } from 'src/app/Services/Order/order.service';

@Component({
  selector: 'app-order-client',
  templateUrl: './order-client.component.html',
  styleUrls: ['./order-client.component.css']
})
export class OrderClientComponent implements OnInit {
   
  order:Order;
  show:boolean;
  showOrder:boolean;
  message:any;
  ListOrder: any;

  constructor(private orderService : OrderService) { }

  ngOnInit(): void {
   
  }

  AddOrderShow(){
    this.show=true;
    this.showOrder=false;
  }

  

  addOrder(){
      this.orderService.addOrder(this.order).subscribe(()=>this.orderService.getAllOrder());
      }
          

}
