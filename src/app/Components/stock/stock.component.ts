import { Component, OnInit } from '@angular/core';
import { Stock } from '../../Models/Stock';
import { StockService } from '../../Services/Stock/stock.service';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {

  liststock : Stock[];
  constructor(private stockservice : StockService) { }

  ngOnInit(): void {
    this.stockservice.getallstock().subscribe(res=>{console.log(res);
    this.liststock=res}
    );
  }

}
