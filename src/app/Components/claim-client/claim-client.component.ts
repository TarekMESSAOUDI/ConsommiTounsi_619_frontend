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
  submitted = false;
  

  constructor(private Cs:ClaimService) { }

  ngOnInit(): void {

    
  }
  newClaim(): void {
    this.submitted = false;
    this.claim = new Claim();
  }

  save() {
    this.claim.stateClaim = StateClaim_Order.treat
    this.Cs.addClaim(this.claim).subscribe(data => {
      console.log(data)
      this.claim = new Claim();
      
    }, 
    error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

}