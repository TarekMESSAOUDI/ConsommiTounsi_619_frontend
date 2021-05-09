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

  ListCategories:Category[];
ListUnderCategories:UnderCategory[];
category:Category=new Category();
undercategory:UnderCategory=new UnderCategory();

  constructor(private router:Router,private categoryService:CategoryService ,private underCatService:UndercategoryService) { }

  ngOnInit(): void {
    this.categoryService.getAllCategories().subscribe(res=>{console.log(res);
      this.ListCategories=res});

    this.underCatService.getAllUnderCat().subscribe(res=>{console.log(res);
    this.ListUnderCategories=res});

  }
        
  
          // Crud Catgory 
  addCategory(){
    return this.categoryService.addCategory(this.category);
  }
  deleteCategory(idCat:number){
this.categoryService.deleteProductById(idCat).subscribe(()=>this.categoryService.getAllCategories().subscribe(res=>{this.ListCategories =res}));
  }

          // Crud Under Catgory 

    addUnderCategory(){
      return this.underCatService.addUndercategory(this.undercategory);
    }

    deleteUnderCategory(idUnderCat:number){
      this.underCatService.DeleteUnderCat(idUnderCat).subscribe(()=>this.underCatService.getAllUnderCat().subscribe(res=>{this.ListUnderCategories=res}));
    }
  }

