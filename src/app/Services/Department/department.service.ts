import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Department } from 'src/app/Models/Department';
import { Product } from 'src/app/Models/Product';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  DepartmentsRetrieveallUrl ="http://localhost:9091/SpringMVC/servlet/retrieve-all-Departments";
  DepartmentaddUrl="http://localhost:9091/SpringMVC/servlet/add-department";
  DepartmentDeleteUrl="http://localhost:9091/SpringMVC/servlet/remove-department/";
  DepartmentEditURL="http://localhost:9091/SpringMVC/servlet/update-Department"
  DepartmentRetrieveById="http://localhost:9091/SpringMVC/servlet/retrieve-department";
  DepartmentRetreiveByName=" http://localhost:9091/SpringMVC/servlet/retrieve-Department-By-Name"
  affectProductURL="http://localhost:9091/SpringMVC/servlet/alteProductToDepartment";
  affectfileURL="http://localhost:9091/SpringMVC/servlet/alteFileToDepartment"

getprodBydep="http://localhost:9091/SpringMVC/servlet/Getprodbydep?id="


  constructor(private Departmenthttp : HttpClient) { }


  getallDepartments():Observable<Department[]>{
    return this.Departmenthttp.get<Department[]>(this.DepartmentsRetrieveallUrl);
}




getallprodindDep(id):Observable<Product[]>{
  return this.Departmenthttp.get<Product[]>(this.getprodBydep +id );
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
  return this.Departmenthttp.post(this.affectProductURL, department);
}

affectFileToDepartment(department: Department): Observable<any> {
  return this.Departmenthttp.post(this.affectfileURL, department);
}



getDepartmentByName():Observable<Department[]>{
  return this.Departmenthttp.get<Department[]>(this.DepartmentRetreiveByName);
}


updateDep(id: number,department:Department): Observable<Department>{
  return this.Departmenthttp.put<Department>(this.DepartmentEditURL + id, department);
}

/*
//update department
updateDep(id: number, value: any): Observable<Object> {
  return this.Departmenthttp.put(`${this.DepartmentEditURL}/${id}`, value);
}
*/




}
