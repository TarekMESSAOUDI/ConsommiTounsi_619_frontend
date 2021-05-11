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

  ngOnInit(): void { 
  }
  }

  