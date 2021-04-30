import { Component, OnInit } from '@angular/core';
import { Product } from '../../Models/Product';
import { ProductService } from '../../Services/product/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  ListProducts:Product[];
  show:boolean;
  showIntAddProd:boolean;
  product:Product=new Product();

  constructor(private prodSerivce:ProductService) { }

  ngOnInit(): void {
  
    this.prodSerivce.getAllProducts().subscribe(res=>{console.log(res);
    this.ListProducts=res});
  
  }


  deleteProduct(id:number){
    this.prodSerivce.deleteProductById(id).subscribe(()=>this.prodSerivce.getAllProducts().subscribe(res=>{this.ListProducts=res}));
  }
  ViewProducts(){
    this.show=true;
    this.showIntAddProd=false;
  }
 
  AddProdShowDiv(){
    this.show=false;
    this.showIntAddProd=true;
  }

  addProduct(){
    this.prodSerivce.addProduct(this.product).subscribe(()=>this.prodSerivce.getAllProducts().subscribe(res=>{this.ListProducts=res}));
  }


}
