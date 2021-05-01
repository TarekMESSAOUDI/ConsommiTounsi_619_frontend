import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Stock } from 'src/app/Models/Stock';

@Injectable({
  providedIn: 'root'
})
export class StockService {

retrieveStocksurl ="http://localhost:9091/SpringMVC/servlet/retrieve-all-Stocks"; 
 retrieveStockidURL="http://localhost:9091/SpringMVC/servlet/retrieve-stock";
 retrieveStockbyNameUrl="http://localhost:9091/SpringMVC/servlet/retrieve-Stock-By-Name";
 addStockURL="http://localhost:9091/SpringMVC/servlet/add-stock";
 removeStockURL="http://localhost:9091/SpringMVC/servlet/remove-stock"
affectproductToStock="http://localhost:9090/SpringMVC/servlet/allocateProductToStock"
orderproductURL="http://localhost:9090/SpringMVC/servlet/orderProduct"

constructor(private stockhttp : HttpClient) { }

  getallstock():Observable<Stock[]>{
    return this.stockhttp.get<Stock[]>(this.retrieveStocksurl);
  }

getStockById():Observable<Stock[]>{
  return this.stockhttp.get<Stock[]>(this.retrieveStockidURL);
}

adddepartment(stock : Stock){
  return this.stockhttp.post<Stock>(this.addStockURL, stock )
}


deleteStockById(id:number){
  return this.stockhttp.delete("http://localhost:9091/SpringMVC/servlet/remove-stock/"+id );
}

getStockByName():Observable<Stock[]>{
  return this.stockhttp.get<Stock[]>(this.retrieveStockbyNameUrl);
}

affectProdToStock(stock:Stock) {
  return this.stockhttp.post(this.affectproductToStock, Stock);
}
OrderProduct(stock:Stock) {
  return this.stockhttp.post(this.orderproductURL, Stock);
}


}

