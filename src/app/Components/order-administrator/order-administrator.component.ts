import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  order: Order = new Order();
  submitted = false;
  id: number;
  msg = '';
  public editOrder: Order;
  


  constructor( private route: ActivatedRoute,private router: Router, private orderService : OrderService) { }

  

  ngOnInit(): void {
    this.order=new Order();
  
    
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

//delete order
  public deleteOrder(idOrder:number){
  this.orderService.deleteOrder(idOrder).subscribe(data =>{
    this.ngOnInit();
  },
  error =>
  console.log(error)
  );
  }

  //generate pdf

    public showpdf(idOrder:number){
      this.orderService.showPdf(idOrder).subscribe(data =>{
        this.ngOnInit();
      },
      error =>
      console.log(error)
      );
      }

//add Order

      newOrder(): void {
        this.submitted = false;
        this.order = new Order();
      }
    
      save() {
        this.orderService
        .addOrder(this.order).subscribe(data => {
          console.log(data)
          this.order = new Order();
          this.gotoList();
        }, 
        error => console.log(error));
      }
    
      onSubmit() {
        this.submitted = true;
        this.save();    
      }
    
      gotoList() {
        this.router.navigate(['/administrator/order']);
      }

 
   //get order by id

   public getOrderbyid(idOrder : number){
    this.orderService.getOrderbyid(idOrder).subscribe(data => {
      this.ngOnInit();
    },
    error =>
    console.log(error)
    );
    
  }

  public updateOrder(order : Order): void {
    this.orderService.updateOrder(order).subscribe(
      (response: Order) => {
        console.log(response);
        this.ngOnInit();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  
  public onOpenModal(order : Order, mode: string): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addEmployeeModal');
    }
    if (mode === 'edit') {
      this.editOrder = order;
      button.setAttribute('data-target', '#updateEmployeeModal');
    }
    
    container.appendChild(button);
    button.click();
  }
  
  
 
    
  }  
  
