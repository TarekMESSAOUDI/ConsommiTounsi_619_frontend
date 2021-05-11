import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/app/Models/Category';
import { UnderCategory } from 'src/app/Models/UnderCategory';
import { CategoryService } from 'src/app/Services/Category/category.service';
import { UndercategoryService } from 'src/app/Services/UnderCategory/undercategory.service';

@Component({
  selector: 'app-categoryadministrator',
  templateUrl: './categoryadministrator.component.html',
  styleUrls: ['./categoryadministrator.component.css']
})
export class CategoryadministratorComponent implements OnInit {

  ListCategories: Category[];
  ListUnderCategories: UnderCategory[];
  category: Category = new Category();
  undercategory: UnderCategory = new UnderCategory();

  manageCatInterface: boolean;
  manageunderCatInterface: boolean;


  constructor(private router: Router, private categoryService: CategoryService, private underCatService: UndercategoryService) { }

  ngOnInit(): void {
    this.categoryService.getAllCategories().subscribe(res => {
      console.log(res);
      this.ListCategories = res
    });

    this.underCatService.getAllUnderCat().subscribe(res => {
      console.log(res);
      this.ListUnderCategories = res
    });

  }




  // Crud Catgory
  ShowInterfaceManageCat() {
    this.manageCatInterface = true;
    this.manageunderCatInterface = false;

  }
  addCategory() {
    return this.categoryService.addCategory(this.category).subscribe(() => this.categoryService.getAllCategories().subscribe(res => { this.ListCategories = res }));
  }

  deleteCategory(idCat: number) {
    this.categoryService.deleteCategoryById(idCat).subscribe(() => this.categoryService.getAllCategories().subscribe(res => { this.ListCategories = res }));
  }

  // Crud Under Catgory 
  showManageUnderCayegoryInterface() {
    this.manageCatInterface = false;
    this.manageunderCatInterface = true;
  }

  onChange(value) {
    this.undercategory.Category = value
  }

  addUnderCategory() {
    var b = Number(this.undercategory.Category)
    console.log(this.undercategory)
    return this.underCatService.addUndercategory(this.undercategory, b).subscribe(() => this.underCatService.getAllUnderCat().subscribe(res => { this.ListUnderCategories = res }));
  }

  deleteUnderCategory(idUnderCat: number) {
    this.underCatService.DeleteUnderCat(idUnderCat).subscribe(() => this.underCatService.getAllUnderCat().subscribe(res => { this.ListUnderCategories = res }));
  }
}

