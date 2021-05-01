import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/Models/Product';
import { ProductService } from 'src/app/Services/product/product.service';

@Component({
  selector: 'app-product-administrator',
  templateUrl: './product-administrator.component.html',
  styleUrls: ['./product-administrator.component.css']
})
export class ProductAdministratorComponent implements OnInit {
  ListProducts:Product[];
  show:boolean;
  showIntAddProd:boolean=false;
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


