import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Department } from 'src/app/Models/Department';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  DepartmentsRetrieveallUrl ="http://localhost:9091/SpringMVC/servlet/retrieve-all-Departments";
  DepartmentaddUrl="http://localhost:9091/SpringMVC/servlet/add-department";
  DepartmentDeleteUrl="http://localhost:9091/SpringMVC/servlet/remove-department/";
  DepartmentRetrieveById="http://localhost:9091/SpringMVC/servlet/retrieve-department";
  DepartmentRetreiveByName=" http://localhost:9091/SpringMVC/servlet/retrieve-Department-By-Name"
  affectProductURL="http://localhost:9091/SpringMVC/servlet/alteProductToDepartment";
  affectfileURL="http://localhost:9091/SpringMVC/servlet/alteFileToDepartment"




  constructor(private Departmenthttp : HttpClient) { }


  getallDepartments():Observable<Department[]>{
    return this.Departmenthttp.get<Department[]>(this.DepartmentsRetrieveallUrl);
}

adddepartment(department : Department){
  return this.Departmenthttp.post<Department>(this.DepartmentaddUrl, department )
}


deleteDepartmentById(id:number){
  return this.Departmenthttp.delete("http://localhost:9091/SpringMVC/servlet/remove-department/"+id );
}


getDepartmentById():Observable<Department[]>{
  return this.Departmenthttp.get<Department[]>(this.DepartmentRetrieveById);
}

affectProductToDepartment(department: Department): Observable<any> {
  return this.Departmenthttp.post(this.affectProductURL, Department);
}

affectFileToDepartment(department: Department): Observable<any> {
  return this.Departmenthttp.post(this.affectfileURL, Department);
}



getDepartmentByName():Observable<Department[]>{
  return this.Departmenthttp.get<Department[]>(this.DepartmentRetreiveByName);
}


}
