import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Department } from 'src/app/Models/Department';
import { DepartmentService } from 'src/app/Services/Department/department.service';

@Component({
  selector: 'app-department-client',
  templateUrl: './department-client.component.html',
  styleUrls: ['./department-client.component.css']
})
export class DepartmentClientComponent implements OnInit {

  ListDepartment:Department[];

  constructor(public depSerivce:DepartmentService,private router: Router) { }

  ngOnInit(): void {

    this.depSerivce.getallDepartments().subscribe(res=>{console.log(res);
      this.ListDepartment=res});
  }

}
