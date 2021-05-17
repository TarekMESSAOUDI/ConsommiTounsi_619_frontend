import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/Models/Category';
import { Product } from 'src/app/Models/Product';
import { UnderCategory } from 'src/app/Models/UnderCategory';
import { CategoryService } from 'src/app/Services/Category/category.service';
import { UndercategoryService } from 'src/app/Services/UnderCategory/undercategory.service';






@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  ListResults: any
  ListCategories: Category[];
  ListUnderCategories : UnderCategory[];

  constructor(private categoryService: CategoryService, private UnderCategoryService: UndercategoryService, ) { }

  ngOnInit(): void {
    this.categoryService.getAllCategories().subscribe(res => {
      this.ListCategories = res
    });


    this.UnderCategoryService.getAllUnderCat().subscribe(res => {
      this.ListUnderCategories = res
    });
  }
  getProdsByUnderCat(id: number){
    return this.UnderCategoryService.getProdsByIdUnderCat(id).subscribe((res) => {
       this.ListResults = res;
       console.log(this.ListResults)
    })
  }
}
