import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Cagnotte } from 'src/app/Models/Cagnotte';

@Injectable({
  providedIn: 'root'
})
export class CagnotteService {


  modifyCagnotteURL:"http://localhost:9091/SpringMVC/servlet/modify-cagnotte";
  getCagnotteByIdURL:"http://localhost:9091/SpringMVC/servlet/getCagnotte_by_ID"

  constructor(private cagnottehttp: HttpClient, private router: Router) { }
  
  public addcagnotte(cagnotte:Cagnotte){
    return this.cagnottehttp.post<Cagnotte>("http://localhost:9091/SpringMVC/servlet/add-cagnotte", cagnotte);
  }

  getAllCagnotte():Observable<Cagnotte[]>{
    return this.cagnottehttp.get<Cagnotte[]>("http://localhost:9091/SpringMVC/servlet/getAllCagnotte");
  }

  public deleteCagnotte(idCagnotte:number){
    return this.cagnottehttp.delete("http://localhost:9091/SpringMVC/servlet/delete-cagnotte/" +idCagnotte);
  }

  updateCagnotte(id: number, value: any): Observable<any> {
    return this.cagnottehttp.put(this.modifyCagnotteURL, value);
  }

  getOrderById(id : number): Observable<any> {
    return this.cagnottehttp.get(this.getCagnotteByIdURL);
  }

}
