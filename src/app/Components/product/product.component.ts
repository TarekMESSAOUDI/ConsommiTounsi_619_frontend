import { Component,Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/Models/User';
import { BasketService } from 'src/app/Services/Basket/basket.service';
import { DatashareService } from 'src/app/Services/SharingData/datashare.service';
import { Product } from '../../Models/Product';
import { ProductService } from '../../Services/product/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
   productsCart: any[] = [];
  selectedProduct:Product;
  ListProducts:Product[];
  user:User;
  productName:string;
 
  
  constructor(private prodClientServ:ProductService,private router:Router,private dataShare:DatashareService,
    private CartService:BasketService) { 
    
  }

  ngOnInit(): void {
    this.prodClientServ.getAllProducts().subscribe(res=>{
      console.log(res)
      this.ListProducts=res});
            
  }
  onSelect(product: Product) : void 
    {
      console.log(product,"esta");
        this.selectedProduct = product;
        console.log(this.selectedProduct,"estass");
       this.router.navigate([`/client/product/${product.idProduct}`, (product)]);
    }
    onAddToCart(product: Product) : void 
    {
      let prodId = product.idProduct;
      console.log(typeof(prodId),prodId)
      // let basketId =1;
      // this.prodClientServ.addProdToBasket(basketId,prodId).subscribe(res=>{console.log(res);})
      console.log(product,"product just added ");
      this.productsCart.push(product)
      console.log(this.productsCart.length,'number of products added to cart');
      console.log('estaa',this.productsCart)
    }

    searchByName(){
     
      if(this.productName!==""){
        this.ListProducts=this.ListProducts.filter(res=>{
          return res.titleProduct?.toLocaleLowerCase().match(this.productName?.toLocaleLowerCase())
        });
      }else if(this.productName==""){
        this.ngOnInit();
      }
    }
    
likeProduct(id:number,prod:Product){
  return this.prodClientServ.likeProduct(prod,id);
}
  //ADD TO CART SERVICE

addToCArt(product:Product){
  this.CartService.addToCart(product);
}

}
