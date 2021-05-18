import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cagnotte } from 'src/app/Models/Cagnotte';
import { CagnotteService } from 'src/app/Services/Cagnotte/cagnotte.service';

@Component({
  selector: 'app-cagnotte-administrator',
  templateUrl: './cagnotte-administrator.component.html',
  styleUrls: ['./cagnotte-administrator.component.css']
})
export class CagnotteAdministratorComponent implements OnInit {

  ListCagnotte : any;
  show:boolean;
  showCagnotte:boolean;
  val:string;
  message:any;
  cagnotte: Cagnotte = new Cagnotte();
  submitted = false;
  id: number;
  name: String;

  constructor( private route: ActivatedRoute,private router: Router, private cagnotteService : CagnotteService) { }

  ngOnInit(): void {
    this.cagnotte=new Cagnotte();
  
    
    let resp=this.cagnotteService.getAllCagnotte();
    resp.subscribe((data)=>this.ListCagnotte=data);
  }

  
  AddCagnotteShow(){
    this.show=true;
    this.showCagnotte=false;
  }
  
  ViewCagnotte(){
    this.show=false;
    this.showCagnotte=true;
  }

  //delete cagnotte
  public deleteCagnotte(idCagnotte:number){
    this.cagnotteService.deleteCagnotte(idCagnotte).subscribe(data =>{
      this.ngOnInit();
    },
    error =>
    console.log(error)
    );
    }

  //add Cagnotte

  newOrder(): void {
    this.submitted = false;
    this.cagnotte = new Cagnotte();
  }

  save() {
    this.cagnotteService
    .addcagnotte(this.cagnotte).subscribe(data => {
      console.log(data)
      this.cagnotte = new Cagnotte();
      this.gotoList();
    }, 
    error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/administrator/cagnotte']);
  }

  


}
