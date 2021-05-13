import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/Models/Product';
import { DepartmentService } from 'src/app/Services/Department/department.service';

@Component({
  selector: 'app-espace-department-manager',
  templateUrl: './espace-department-manager.component.html',
  styleUrls: ['./espace-department-manager.component.css']
})
export class EspaceDepartmentManagerComponent implements OnInit {
ListProducts:Product[];
id:number=2;


  constructor(public deparserv :DepartmentService) { }

  ngOnInit(): void {
    

//list des produit :listed by id department =1 ????


    this.deparserv.getallprodindDep(this.id).subscribe(res=>{console.log(res);
    this.ListProducts=res});
  }

}
