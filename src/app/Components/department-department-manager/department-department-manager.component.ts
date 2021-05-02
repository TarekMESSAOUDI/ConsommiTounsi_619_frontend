import { Component, OnInit } from '@angular/core';
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

  alert :boolean=false;
  constructor(private Departmentservice : DepartmentService) { }





  ngOnInit(): void {this.Departmentservice.getallDepartments().subscribe(res=>{console.log(res);
    this.listDepartment=res}
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





 








  //show different pages 
  AddDepatmentshowdiv(){
    this.show=true;
    this.showdepartments=false;
  }
  
  Viewdepartment(){
    this.show=false;
    this.showdepartments=true;
  }

}
