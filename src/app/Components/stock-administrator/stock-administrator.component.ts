import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Stock } from 'src/app/Models/Stock';
import { StockService } from 'src/app/Services/Stock/stock.service';

@Component({
  selector: 'app-stock-administrator',
  templateUrl: './stock-administrator.component.html',
  styleUrls: ['./stock-administrator.component.css']
})
export class StockAdministratorComponent implements OnInit {
stocks : Stock[];

nameStock :string;
nbr:number; 


  constructor( private stockservice: StockService) { }

  ngOnInit(): void { this.getStocks();

    this.getActivitystat();
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



  Search(){
    if(this.nameStock!=""){

      
    this.stocks=this.stocks.filter(res=>{ return res.nameStock.toLocaleLowerCase().match(this.nameStock.toLocaleLowerCase());
    });
    }
    else if(this.nameStock==""){
      this.ngOnInit();
    }

  }



  
public getActivitystat(): void {
  this.stockservice.getstockstat().subscribe(
    (response: any) => {
      this.nbr = response;
      console.log(this.nbr);
    },
    );
}

}
