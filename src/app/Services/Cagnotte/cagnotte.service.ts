import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Cagnotte } from 'src/app/Models/Cagnotte';

@Injectable({
  providedIn: 'root'
})
export class CagnotteService {

  addCagnotteURL:"http://localhost:9091/SpringMVC/servlet/add-cagnotte";
  getAllCagnotteURL:"URL : http://localhost:9091/SpringMVC/servlet/getAllCagnotte";
  deleteCagnotteURL:"http://localhost:9091/SpringMVC/servlet/delete-cagnotte";
  modifyCagnotteURL:"http://localhost:9091/SpringMVC/servlet/modify-cagnotte";
  getCagnotteByIdURL:"http://localhost:9091/SpringMVC/servlet/getCagnotte_by_ID"

  constructor(private cagnottehttp: HttpClient, private router: Router) { }
  
  addcagnotte(cagnotte:Cagnotte){
    return this.cagnottehttp.post<Cagnotte>(this.addCagnotteURL,Cagnotte);
  }

  getAllCagnotte():Observable<Cagnotte[]>{
    return this.cagnottehttp.get<Cagnotte[]>(this.getAllCagnotteURL);
  }

  deletetCagnotteById(id:number){
    return this.cagnottehttp.delete(this.deleteCagnotteURL+id);
  }

  updateCagnotte(id: number, value: any): Observable<any> {
    return this.cagnottehttp.put(this.modifyCagnotteURL, value);
  }

  getOrderById(id : number): Observable<any> {
    return this.cagnottehttp.get(this.getCagnotteByIdURL);
  }

}
