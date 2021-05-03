import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Department } from 'src/app/Models/Department';
import { DepartmentService } from 'src/app/Services/Department/department.service';

@Component({
  selector: 'app-department-department-manager',
  templateUrl: './department-department-manager.component.html',
  styleUrls: ['./department-department-manager.component.css']
})
export class DepartmentDepartmentManagerComponent implements OnInit {

  listDepartment : Department[];
  show:boolean;
  showdepartments:boolean;
  department:Department= new Department;
  id:number;

  public editDep :Department;

  alert :boolean=false;
  constructor(private Departmentservice : DepartmentService, private router: Router) { }





  ngOnInit() {
    this.getDepartments();
  }

  public getDepartments(): void {
    this.Departmentservice.getallDepartments().subscribe(
      (response: Department[]) => {
        this.listDepartment = response;
        console.log(this.listDepartment);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }


  adddepartment(){
    this.Departmentservice.adddepartment(this.department).subscribe(res=>{console.log(res);
    }
    );
    this.alert=true
  }

  closealert(){
    this.alert=false;
  }










deleteDepartment(id:number){
    this.Departmentservice.deleteDepartmentById(id).subscribe(()=>this.Departmentservice.getallDepartments().subscribe(res=>{this.listDepartment=res}));
  }



//////////////////////////////////////////////////////////////////////////////////
  









  //show different pages 
  AddDepatmentshowdiv(){
    this.show=true;
    this.showdepartments=false;
  }
  
  Viewdepartment(){
    this.show=false;
    this.showdepartments=true;
  }


  public onUpdateDep(department: Department): void {
    this.Departmentservice.updateDep(department).subscribe(
      (response: Department) => {
        console.log(response);
        this.getDepartments();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
    
  
  public onOpenModal(department: Department, mode: string): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    
    if (mode === 'edit') {
      this.editDep = department;
      button.setAttribute('data-target', '#updateEmployeeModal');
    }
    
    container.appendChild(button);
    button.click();
  }

}
