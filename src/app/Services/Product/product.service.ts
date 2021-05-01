import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../../Models/Product';

@Injectable({
  providedIn: 'root'
})                                                                             //moneim crud
export class ProductService {
  productsURL="http://localhost:9091/SpringMVC/servlet/show-all-products";
  deleteProdUrl="http://localhost:9091/SpringMVC/servlet/remove-product/";
  addProdUrl="http://localhost:9091/SpringMVC/servlet/add-product";
  putProdUrl:"http://localhost:9091/SpringMVC/servlet/update-Product";

  getProductsByIdUrl:"http://localhost:9091/SpringMVC/servlet/GetById/";
  getproductsByNameurl:"http://localhost:9091/SpringMVC/servlet/ShowAllByName/";

  mostExpensiveProducturl:"http://localhost:9091/SpringMVC/servlet/Most-Expensive";
  totalBuyingProductUrl:"http://localhost:9091/SpringMVC/servlet/total-achat";
  totalSellProducturl:"http://localhost:9091/SpringMVC/servlet/total-vente";
  GainProductUrl:"http://localhost:9091/SpringMVC/servlet/total-gain-product";

  
  constructor(private prodhttp:HttpClient ) { }

  getAllProducts():Observable<Product[]>{
    return this.prodhttp.get<Product[]>(this.productsURL);
  }

  deleteProductById(id:number){
    return this.prodhttp.delete(this.deleteProdUrl+id);
  }

  
 addProduct(product:Product){
  return this.prodhttp.post<Product>(this.addProdUrl,product);
}

updateproduct(id:number,value:any){
  this.prodhttp.put(this.putProdUrl,value);
}

getAllProductsByName(productName:string){
return this.prodhttp.get<Product>(this.getproductsByNameurl+productName);
}

getOneProductById(productId:number){
return this.prodhttp.get<Product>(this.getProductsByIdUrl+productId);
}

mostExepensiveProduct(){
  return this.prodhttp.get<Product>(this.mostExpensiveProducturl);
}

totalSell(){
  return this.prodhttp.get(this.totalSellProducturl);
}

totalBuying(){
  return this.prodhttp.get(this.totalBuyingProductUrl);
}
}
