import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Department } from 'src/app/Models/Department';
import { Product } from 'src/app/Models/Product';
import { DepartmentService } from 'src/app/Services/Department/department.service';

@Component({
  selector: 'app-espace-department-manager',
  templateUrl: './espace-department-manager.component.html',
  styleUrls: ['./espace-department-manager.component.css']
})
export class EspaceDepartmentManagerComponent implements OnInit {
ListProducts:Product[];
ListDepartments:Department[];
product :Product=new Product;



  constructor(public deparserv :DepartmentService , private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.deparserv.getallDepartments().subscribe((res) => {
      console.log(res);
      this.ListDepartments = res;
    });


    let result = this.route.snapshot.paramMap.has('id');
    
if(result){

  this.getallprodinDep()
}
    }



    getallprodinDep(){
      let idDepartment =this.route.snapshot.paramMap.get('id');
      
    
      this.deparserv.getallprodindDep(idDepartment ).subscribe(res=>{console.log(res);
        this.ListProducts=res});
    
    
    }

    onChange(value) {
      this.product.Department = value;
    }
    
    }
    

//list des produit :listed by id department =1 ???
    
  






  





 