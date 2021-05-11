import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/Models/Product';
import { UndercategoryService } from 'src/app/Services/UnderCategory/undercategory.service';

@Component({
  selector: 'app-products-view',
  templateUrl: './products-view.component.html',
  styleUrls: ['./products-view.component.css']
})
export class ProductsViewComponent implements OnInit {
  idCat: number
  
   id: number;
    listProducts : any
  constructor(private route:ActivatedRoute,private underCatService:UndercategoryService) { }

  ngOnInit(): void {
    this.idCat =  this.route.snapshot.params.id;
    this.underCatService.getProdsByIdUnderCat(this.idCat).subscribe(res => {
      console.log(res);
      this.listProducts = res
    });
  }

}
