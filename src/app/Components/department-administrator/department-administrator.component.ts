import { Component, OnInit } from '@angular/core';
import { Department } from 'src/app/Models/Department';
import { DepartmentService } from 'src/app/Services/Department/department.service';

@Component({
  selector: 'app-department-administrator',
  templateUrl: './department-administrator.component.html',
  styleUrls: ['./department-administrator.component.css']
})
export class DepartmentAdministratorComponent implements OnInit {


listDepartment: Department[];

  constructor(private Departmentservice : DepartmentService) { }

 
  ngOnInit(): void{ this.getallDepartments();
    

  }
getallDepartments(){

  this.Departmentservice.getallDepartments().subscribe(res=>{console.log(res);
    this.listDepartment =res});


}
  
}
