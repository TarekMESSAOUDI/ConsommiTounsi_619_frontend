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

  
  constructor(private prodhttp:HttpClient ) { }

  getAllProducts():Observable<Product[]>{
    return this.prodhttp.get<Product[]>(this.productsURL);
  }

  deleteProductById(id:number){
    return this.prodhttp.delete("http://localhost:9091/SpringMVC/servlet/remove-product/"+id);
  }

  
 addProduct(product:Product){
  return this.prodhttp.post<Product>(this.addProdUrl,product);
}

}
