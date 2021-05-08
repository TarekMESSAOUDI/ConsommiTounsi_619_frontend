import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Claim } from 'src/app/Models/Claim';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClaimService {

addClaimURL="http://localhost:9091/SpringMVC/servlet/add-claim";
retreiveAllClaimsURL="http://localhost:9091/SpringMVC/servlet/retrieve-all-claims";
retreiveClaimURL="http://localhost:9091/SpringMVC/servlet/retrieve-claim";
updateClaimURL="http://localhost:9091/SpringMVC/servlet/modify-claim";
DeleteClaimURL="http://localhost:9091/SpringMVC/servlet";


  constructor(private claimhttp: HttpClient, private router: Router) { }
  
  addClaim(claim: Claim): Observable<any> {
    return this.claimhttp.post(this.addClaimURL, claim);
  }

  DeleteClaim(id: number): Observable<any> {
    return this.claimhttp.delete(`${this.DeleteClaimURL}/remove-claim/${id}`, { responseType: 'text' });
  }


  retreiveAllClaims(): Observable<any> {
    return this.claimhttp.get(this.retreiveAllClaimsURL);
  }

  retreiveClaimClaim(id:number):Observable<any>{
    return this.claimhttp.get(this.retreiveClaimURL);
  }
  updateClaim(id: number, value: any): Observable<any> {
    return this.claimhttp.put(this.updateClaimURL, value);
  }

}
