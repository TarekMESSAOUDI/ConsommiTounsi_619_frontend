import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/Models/Product';
import { Stock } from 'src/app/Models/Stock';
import { ProductService } from 'src/app/Services/product/product.service';
import { StockService } from 'src/app/Services/Stock/stock.service';

@Component({
  selector: 'app-stock-administrator',
  templateUrl: './stock-administrator.component.html',
  styleUrls: ['./stock-administrator.component.css']
})
export class StockAdministratorComponent implements OnInit {
stocks : Stock[];
productslist :Product[];
nameStock :string;
nbr:number; 
nbrr:number;
product:  Product = new Product ();
stock:Stock;

  constructor( private stockservice: StockService,private productService:ProductService) { }

  ngOnInit(): void { this.getStocks();

    this.productService.getAllProducts().subscribe((res) => {
      console.log(res);
      this.productslist = res;
    });

    this.getActivitystat();
    this.getActivitystatcost();
  
  }
getProducts(){
  this.productService.getAllProducts();
 
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


//stock total cost stats

public getActivitystatcost(): void {
  this.stockservice.getcostystockstat().subscribe(
    (response: any) => {
      this.nbrr = response;
      console.log(this.nbrr);
    },
    );
}

onChange(value1) {
  this.product.idProduct = value1;
}

onChange2(value) {
  this.product.stock = value;
}

affectProdToStock(){
  var b =Number (this.product.stock)
  this.stockservice.affectProdToStock(b,this.product.idProduct).subscribe(() =>
      this.stockservice.getallstock().subscribe((res) => {
        this.stocks = res;
      })
    );
  }
}
