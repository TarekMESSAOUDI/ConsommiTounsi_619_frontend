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
affectproductToStockUrl="http://localhost:9091/SpringMVC/servlet/allocateProductToStock"
orderproductURL="http://localhost:9091/SpringMVC/servlet/orderProduct"
updatestockURL="http://localhost:9091/SpringMVC/servlet/update-stock"
countstock="http://localhost:9091/SpringMVC/servlet/nbstocks"

coststockstat="http://localhost:9091/SpringMVC/servlet/costystocks"

constructor(private stockhttp : HttpClient) { }

  getallstock():Observable<Stock[]>{
    return this.stockhttp.get<Stock[]>(this.retrieveStocksurl);
  }

getStockById():Observable<Stock[]>{
  return this.stockhttp.get<Stock[]>(this.retrieveStockidURL);
}

addstock(stock : Stock):Observable<Stock>{
  return this.stockhttp.post<Stock>(this.addStockURL, stock )
}


deleteStockById(departmentid:number):Observable<void>{
  return this.stockhttp.delete<void>("http://localhost:9091/SpringMVC/servlet/remove-stock/"+departmentid );
}

getStockByName():Observable<Stock[]>{
  return this.stockhttp.get<Stock[]>(this.retrieveStockbyNameUrl);
}
affectProdToStock(idStock:number,idProduct:number) {
  return this.stockhttp.put(`${this.affectproductToStockUrl}/${idStock}/${idProduct}`, {});
}

OrderProduct(stock:Stock) {
  return this.stockhttp.post(this.orderproductURL, stock);
}


updateStock(stock:Stock): Observable<Stock>{
  return this.stockhttp.put<Stock>(this.updatestockURL, stock);
}



getstockstat():Observable<any>{
  return this.stockhttp.get<any>(this.countstock);
}

getcostystockstat():Observable<any>{
  return this.stockhttp.get<any>(this.coststockstat);
}


}

