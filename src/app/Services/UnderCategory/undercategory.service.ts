import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UnderCategory } from 'src/app/Models/UnderCategory';

@Injectable({
  providedIn: 'root'
})
export class UndercategoryService {

  GetAllUnderCatUrl = "http://localhost:9091/SpringMVC/servlet/show-all-under-categories";
  AddUnderCatUrl = "http://localhost:9091/SpringMVC/servlet/add-underCategory/";
  DeleteUnderCatUrl = "http://localhost:9091/SpringMVC/servlet/remove-under-category/";
  updateUnderCatUrl = "http://localhost:9091/SpringMVC/servlet/update-under-category";
  affectProductToUnderCatUrl = "http://localhost:9091/SpringMVC/servlet/affect-product-to-under-category/";
  getUnderCatByIdUrl = "http://localhost:9091/SpringMVC/servlet/GetByIdUnderCat/";
  getProdsbyIdUnderCatUrl = "http://localhost:9091/SpringMVC/servlet/underCatProds/"

  constructor(private httpunderCat: HttpClient) { }

  getAllUnderCat(): Observable<UnderCategory[]> {
    return this.httpunderCat.get<UnderCategory[]>(this.GetAllUnderCatUrl);
  }

  addUndercategory(underCategory: UnderCategory, id: number) {
    return this.httpunderCat.post<UnderCategory>(this.AddUnderCatUrl + id, underCategory);
  }

  DeleteUnderCat(idUnderCatgory: number) {
    return this.httpunderCat.delete(this.DeleteUnderCatUrl + idUnderCatgory);
  }

  updateUnderCategory(idUderCat: number, value) {
    return this.httpunderCat.put(this.updateUnderCatUrl + idUderCat, value);
  }

  getUnderCatById(idUnderCat: number) {
    return this.httpunderCat.get<UnderCategory>(this.getUnderCatByIdUrl + idUnderCat);
  }

  assignProductToUnderCat(idProduct, idUnderCatgory) {
    return this.httpunderCat.put(this.affectProductToUnderCatUrl + idProduct, idUnderCatgory);
  }

  getProdsByIdUnderCat(idUnderCat: number){
    return this.httpunderCat.get(this.getProdsbyIdUnderCatUrl + idUnderCat)
  }
}
