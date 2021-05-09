import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from 'src/app/Models/Category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  showAllCategoryUrl = "http://localhost:9091/SpringMVC/servlet/show-all-categories";
  addCategoryUrl = "http://localhost:9091/SpringMVC/servlet/add-category/";
  deleteCategoryUrl = "http://localhost:9091/SpringMVC/servlet/remove-category/";
  updateCategoryUrl = "http://localhost:9091/SpringMVC/servlet/update-category";
  affectUnderCategoryToCategoryUrl = "http://localhost:9091/SpringMVC/servlet/affect-undercategory-to-category/";


  constructor(private httpCategory: HttpClient) { }
  getAllCategories(): Observable<Category[]> {
    return this.httpCategory.get<Category[]>(this.showAllCategoryUrl);
  }

  deleteProductById(id: number) {
    return this.httpCategory.delete(this.deleteCategoryUrl + id);
  }


  addCategory(category: Category) {
    return this.httpCategory.post<Category>(this.addCategoryUrl, category);
  }

  updateCategory(id: number, value: any) {
    return this.httpCategory.put(this.updateCategoryUrl, value);
  }

  affectUnderCategoryToCategory(idUnderCatgory: number, idcategory: number) {
    return this.httpCategory.put(this.affectUnderCategoryToCategoryUrl + idUnderCatgory, idcategory);
  }

}

