import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiResponse } from 'src/app/Models/api.response';
import { Order } from 'src/app/Models/Order';
import { OrderService } from 'src/app/Services/Order/order.service';

@Component({
  selector: 'app-order-client',
  templateUrl: './order-client.component.html',
  styleUrls: ['./order-client.component.css']
})
export class OrderClientComponent implements OnInit {
   
  public order:Order[];
  public editStock: Order;
  public deleteStock: Order;
  editOrder: Order;
  deleteOrder: Order;

  constructor(private orderService : OrderService) { }

  ngOnInit(): void { this.getAllOrder();
   
  }

  public getAllOrder(): void {
    this.orderService.getAllOrder().subscribe(
      (response: Order[]) => {
        this.order = response;
        console.log(this.order);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }



  public onAddOrder(addForm: NgForm): void {
    document.getElementById('add-employee-form').click();
    this.orderService.addOrder(addForm.value).subscribe(
      (response: ApiResponse) => {
        console.log(response);
        this.getAllOrder();
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );
  }


 


  public onDeleteOrder(idOrder : number): void {
    this.orderService.deleteOrder(idOrder).subscribe(
      (response: Order) => {
        console.log(response);
        this.getAllOrder();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public searchOrder(key: string): void {
    console.log(key);
    const results: Order[] = [];
    for (const stock of this.order) {
      if (stock.stateOrder.toLowerCase().indexOf(key.toLowerCase()) !== -1 ) {
        results.push(stock);
      }
    }
    this.order = results;
    if (results.length === 0 || !key) {
      this.getAllOrder();
    }
  }



  public onOpenModal(order: Order, mode: string): void {
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
    if (mode === 'delete') {
      this.deleteOrder = order;
      button.setAttribute('data-target', '#deleteEmployeeModal');
    }
    container.appendChild(button);
    button.click();
  }

          

}
