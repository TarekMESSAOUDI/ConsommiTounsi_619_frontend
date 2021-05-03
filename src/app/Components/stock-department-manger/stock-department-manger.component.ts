import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Stock } from 'src/app/Models/Stock';
import { StockService } from 'src/app/Services/Stock/stock.service';

@Component({
  selector: 'app-stock-department-manger',
  templateUrl: './stock-department-manger.component.html',
  styleUrls: ['./stock-department-manger.component.css']
})
export class StockDepartmentMangerComponent implements OnInit {
public stocks:Stock[];



public editStock: Stock;
public deleteStock: Stock;



  constructor(private stockservice: StockService) { }

  ngOnInit(): void { this.getStocks();
  }

  public getStocks(): void {
    this.stockservice.getallstock().subscribe(
      (response: Stock[]) => {
        this.stocks = response;
        console.log(this.stocks);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }



  public onAddStock(addForm: NgForm): void {
    document.getElementById('add-employee-form').click();
    this.stockservice.addstock(addForm.value).subscribe(
      (response: Stock) => {
        console.log(response);
        this.getStocks();
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );
  }


  public onUpdateStock(stock: Stock): void {
    this.stockservice.updateStock(stock).subscribe(
      (response: Stock) => {
        console.log(response);
        this.getStocks();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }


  public onDeleteStock(departmentid: number): void {
    this.stockservice.deleteStockById(departmentid).subscribe(
      (response: void) => {
        console.log(response);
        this.getStocks();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public searchStocks(key: string): void {
    console.log(key);
    const results: Stock[] = [];
    for (const stock of this.stocks) {
      if (stock.nameStock.toLowerCase().indexOf(key.toLowerCase()) !== -1 ) {
        results.push(stock);
      }
    }
    this.stocks = results;
    if (results.length === 0 || !key) {
      this.getStocks();
    }
  }



  public onOpenModal(stock: Stock, mode: string): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addEmployeeModal');
    }
    if (mode === 'edit') {
      this.editStock = stock;
      button.setAttribute('data-target', '#updateEmployeeModal');
    }
    if (mode === 'delete') {
      this.deleteStock = stock;
      button.setAttribute('data-target', '#deleteEmployeeModal');
    }
    container.appendChild(button);
    button.click();
  }


}
