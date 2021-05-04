import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from 'src/app/Models/Order';
import { OrderService } from 'src/app/Services/Order/order.service';

@Component({
  selector: 'app-order-administrator',
  templateUrl: './order-administrator.component.html',
  styleUrls: ['./order-administrator.component.css']
})
export class OrderAdministratorComponent implements OnInit {

  ListOrder : any;
  show:boolean;
  showOrder:boolean;
  val:string;
  message:any;
  order : Order;
  submitted = false;


  constructor( private orderService : OrderService, private router: Router) { }

  

  ngOnInit(): void {
    this.order=new Order();
  
    
    let resp=this.orderService.getAllOrder();
    resp.subscribe((data)=>this.ListOrder=data);
  }

  showpdf(idOrder){
    let resp=this.orderService.showPdf(idOrder);
    resp.subscribe((data)=>this.ListOrder=data);
  }
  
  AddOrderShow(){
    this.show=true;
    this.showOrder=false;
  }
  
  ViewOrder(){
    this.show=false;
    this.showOrder=true;
  }


  public deleteOrder(idOrder:number){
  this.orderService.deleteOrder(idOrder).subscribe(data =>{
    this.ngOnInit();
  },
  error =>
  console.log(error)
  );
  }

save(){
  this.orderService.addOrder(this.order).subscribe();
}
  

  

  
  
    
    
}  
