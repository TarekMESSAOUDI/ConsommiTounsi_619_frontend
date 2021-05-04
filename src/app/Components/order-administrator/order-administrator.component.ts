import { Component, OnInit } from '@angular/core';
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
  o:Order;
  val:string;
  message:any;


  constructor( private orderService : OrderService) { }

  

  ngOnInit(): void {
  
    
    let resp=this.orderService.getAllOrder();
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


   
  

  addOrder() {
    this.orderService.addOrder(this.o).subscribe(res=>{console.log(res)}
    );
    
  }
  
    
    
}  
