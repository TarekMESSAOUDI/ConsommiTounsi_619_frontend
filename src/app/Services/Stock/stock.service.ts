import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Stock } from 'src/app/Models/Stock';

@Injectable({
  providedIn: 'root'
})
export class StockService {

stockurl ="http://localhost:9091/SpringMVC/servlet/retrieve-all-Stocks"; 
  constructor(private stockhttp : HttpClient) { }

  getallstock():Observable<Stock[]>{
    return this.stockhttp.get<Stock[]>(this.stockurl);
  }
}

