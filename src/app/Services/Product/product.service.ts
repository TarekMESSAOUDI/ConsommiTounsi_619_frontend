import { HttpClient, HttpEvent, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { BarcodeResponse } from 'src/app/Models/BarcodeResponse';
import { Product } from '../../Models/Product';
const cabecera = {headers: new HttpHeaders({'Content-Type': 'application/json'})};

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  public dataForm: FormGroup;
  listData: Product[];
  CodeAbarre: BarcodeResponse;

  productsURL = "http://localhost:9091/SpringMVC/servlet/show-all-products";
  deleteProdUrl = "http://localhost:9091/SpringMVC/servlet/remove-product/";
  addProdUrl = "http://localhost:9091/SpringMVC/servlet/add-product";
  putProdUrl = "http://localhost:9091/SpringMVC/servlet/update-Product/";

  getProductsByIdUrl = "http://localhost:9091/SpringMVC/servlet/GetById/";
  getproductsByNameurl = "http://localhost:9091/SpringMVC/servlet/ShowAllByName/";

  mostExpensiveProducturl = "http://localhost:9091/SpringMVC/servlet/Most-Expensive";
  totalBuyingProductUrl = "http://localhost:9091/SpringMVC/servlet/total-achat";
  totalSellProducturl = "http://localhost:9091/SpringMVC/servlet/total-vente";
  GainProductUrl: "http://localhost:9091/SpringMVC/servlet/total-gain-product";
  GETBYID = " http://localhost:9091/SpringMVC/servlet/prod/";
  GETALLS = "http://localhost:9090/SpringMVC/servlet/GETALLS";
  PostProdcutUrl = "http://localhost:9091/SpringMVC/servlet/Productss";

  deleteAvance = "http://localhost:9091/SpringMVC/servlet/products";

  addProdToBasketUrl = "http://localhost:9091/SpringMVC/servlet/AffectProdToBasket/";
  likeProductUrl="http://localhost:9091/SpringMVC/servlet/like-product";

  // barcodeReaderService
  dynamsoftBarcodeUrl = "http://localhost:9091/SpringMVC/servlet/dynamsoft";
  zxingBarcodeUrl = "http://localhost:9091/SpringMVC/servlet/zxing";



  constructor(private prodhttp: HttpClient) { }

  getAllProducts(): Observable<Product[]> {
    return this.prodhttp.get<Product[]>(this.productsURL);
  }

  deleteProductById(id: number) {
    return this.prodhttp.delete(this.deleteProdUrl + id);
  }


  addProduct(product: Product, id: number, idd: number) {
    // return this.prodhttp.post<Product>(this.addProdUrl + id + idd, product);
    return this.prodhttp.post(`${this.addProdUrl}/${id}/${idd}`, product, {});
  }


  updateproduct(id: number, product: Product) {
    return this.prodhttp.put(this.putProdUrl + id, product);
  }

  getAllProductsByName(productName: string) {
    return this.prodhttp.get<Product>(this.getproductsByNameurl + productName);
  }

  getOneProductById(productId: number) {
    return this.prodhttp.get<Product>(this.getProductsByIdUrl + productId);
  }

  mostExepensiveProduct() {
    return this.prodhttp.get<Product>(this.mostExpensiveProducturl);
  }

  totalSell() {
    return this.prodhttp.get(this.totalSellProducturl);
  }

  totalBuying() {
    return this.prodhttp.get(this.totalBuyingProductUrl);
  }

  uploadFile(file: File): Observable<HttpEvent<{}>> {
    const formdata: FormData = new FormData();
    formdata.append('file', file);
    const req = new HttpRequest('POST', '<Server URL of the file upload>', formdata, {
      reportProgress: true,
      responseType: 'text'
    });

    return this.prodhttp.request(req);
  }

  getData(id: number): Observable<Object> {
    return this.prodhttp.get(`${this.GETBYID}/${id}`);
  }

  getAll(): Observable<any> {

    return this.prodhttp.get(`${this.GETALLS}`);
  }

  postProduct(formData: FormData) {
    return this.prodhttp.post(`${this.PostProdcutUrl}`, formData);
  }

  createData(formData: FormData): Observable<any> {
    return this.prodhttp.post(`${this.PostProdcutUrl}`, formData);
    // return this.prodhttp.post(`${this.PostProdcutUrl}`, formData);
  }


  deleteData(id: number): Observable<any> {

    return this.prodhttp.delete(`${this.deleteAvance}/${id}`, { responseType: 'text' });
  }
  addProdToBasket(idBask: number, idProd: number) {
    //   return this.prodhttp.post(`${this.addProdToBasketUrl}/${idBask}/${idProd}`,{});
    return this.prodhttp.post("http://localhost:9091/SpringMVC/servlet/AffectProdToBasket/" + idBask + "/" + idProd, {});
  }

  ZxingReader(file) {
    return this.prodhttp.post(this.zxingBarcodeUrl, file)
  }



  productURL = 'http://localhost:9091/SpringMVC/servlet/';

  

  public lista(): Observable<Product[]> {
    return this.prodhttp.get<Product[]>('http://localhost:9091/SpringMVC/servlet/lista', cabecera);
  }

  public detalle(idProduct: number): Observable<Product> {
    return this.prodhttp.get<Product>(this.productURL + `detalle/${idProduct}`, cabecera);
  }

  likeProduct(p:Product,id:number){
     this.prodhttp.post(this.likeProductUrl+id,p);
   } 
 


}
