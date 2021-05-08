import { Component, OnInit } from '@angular/core';
import { Claim } from 'src/app/Models/Claim';
import { ClaimService } from 'src/app/Services/Claim/claim.service';

@Component({
  selector: 'app-claim-administrator',
  templateUrl: './claim-administrator.component.html',
  styleUrls: ['./claim-administrator.component.css']
})
export class ClaimAdministratorComponent implements OnInit {
  ListClaim:Claim[];
  show:boolean;
addclaim:boolean;
//claim : Claim = new Claim();
  claim:Claim;
  constructor(private ClaimService:ClaimService) { 
    this.ClaimService.retreiveAllClaims().subscribe(res=>{console.log(res);
      this.ListClaim=res});
  }

  ngOnInit(): void {
  }



  ViewClaim(){
    this.show=true;
    this.addclaim=false;
  }
  
  AddClaimshow(){
    this.show=false;
    this.addclaim=true;
  }

  DeleteClaim(id:number){
    this.ClaimService.DeleteClaim(id).subscribe(()=>this.ClaimService.retreiveAllClaims().subscribe(res=>{this. ListClaim=res}));
  }


}
