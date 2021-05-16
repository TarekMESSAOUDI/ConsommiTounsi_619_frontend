import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Department } from 'src/app/Models/Department';
import { TypeDepartment } from 'src/app/Models/TypeDepartment';
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
  depToUpdate: any;

  updatedepInt:boolean;
  public editDep :Department;

  alert :boolean=false;




  typedepartment = TypeDepartment;
  Keys(): Array<string> {
    var Keys = Object.keys(this.typedepartment);
    return Keys;
  }

  constructor(private Departmentservice : DepartmentService) { }





  ngOnInit(): void{ this.getallDepartments();
    

  }
getallDepartments(){

  this.Departmentservice.getallDepartments().subscribe(res=>{console.log(res);
    this.listDepartment =res});


}
  

/*
  adddepartment(){
    this.Departmentservice.adddepartment(this.department).subscribe(res=>{console.log(res);
    }
    );
    this.alert=true
  }

  closealert(){
    this.alert=false;
  }

*/


adddepartment(){
  console.log(this.department)
  var startIndex = (this.department.fileName.indexOf('\\') >= 0 ? this.department.fileName.lastIndexOf('\\') : this.department.fileName.lastIndexOf('/'));
var filename = this.department.fileName.substring(startIndex);
if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
    filename = filename.substring(1);}
    this.department.fileName = filename;
    console.log(this.department)
  this.Departmentservice.adddepartment(this.department).subscribe(()=>this.Departmentservice.getallDepartments().subscribe(res=>{this.listDepartment=res}));
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
    this.updatedepInt=false;

  }
  
  Viewdepartment(){
    this.show=false;
    this.showdepartments=true;
    this.updatedepInt=false;
  }


  logOut() {
    localStorage.clear();
  }
    
  



  updatedep(id: number, department: Department) {
    console.log('department', department);
    console.log('ahawa', this.depToUpdate);
    this.Departmentservice.updateDep(id, department).subscribe(() =>
      this.Departmentservice.getallDepartments().subscribe((res) => {
        this.listDepartment = res;
      })
    );
    this.updatedepInt = false;
    this.show = true;
  }


  updatedepInterface(id: number, department: Department) {
    this.updatedepInt = true;
    this.show = false;
    console.log(id, department);
    this.depToUpdate = department;
    console.log('hhh', this.depToUpdate);
  }



  }








  

