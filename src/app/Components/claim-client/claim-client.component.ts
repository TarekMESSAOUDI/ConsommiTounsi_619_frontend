import { Component, OnInit } from '@angular/core';
import { Claim } from 'src/app/Models/Claim';
import { StateClaim_Order } from 'src/app/Models/StateClaim_Order';
import { ClaimService } from 'src/app/Services/Claim/claim.service';

@Component({
  selector: 'app-claim-client',
  templateUrl: './claim-client.component.html',
  styleUrls: ['./claim-client.component.css']
})
export class ClaimClientComponent implements OnInit {
  //ListClaim:Observable<Claim>;
  claim : Claim=new Claim();
  form:any={};
  

  constructor(private Cs:ClaimService) { }

  ngOnInit(): void {
  }
  addClaim() { 
    this.claim.stateClaim = StateClaim_Order.treat
    this.Cs.addClaim(this.claim).subscribe(res=>{console.log(res);
    }
    );

  }
   
  //ViewClaim(){
    //this.show=true;
    //this.addclaim=false;
  //}
  
  //AddClaimshow(){
    //this.show=false;
    //this.addclaim=true;
  //}
  }
