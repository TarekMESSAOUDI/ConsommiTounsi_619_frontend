import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { TokenstorageService } from '../../Services/TokenStorage/tokenstorage.service';
import { UserService } from '../../Services/User/user.service';
import { BasketService } from 'src/app/Services/Basket/basket.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  user: string = localStorage.getItem("AuthUsername");
  NotConnected: boolean = true;
  Client: boolean;
  DeliveryPerson: boolean;
  DepartmentManager: boolean;
  Admin: boolean;

 


  

  basket: number=0;

  constructor(private userservice: UserService, private tokenstorage: TokenstorageService, private router: Router ,public translate:TranslateService,private CartService:BasketService) { }

  



  ngOnInit(): void {
    this.basket;
    this.nbrproductFun();
    
    console.log(this.basket);
    if (localStorage.getItem("AuthAuthorities").includes("ADMINISTRATOR")) {
      this.Admin = true;
      this.Client = false;
      this.DeliveryPerson = false;
      this.DepartmentManager = false;
      this.NotConnected = false;
    } if (localStorage.getItem("AuthAuthorities").includes("CLIENT")) {
      this.Client = true;
      this.Admin = false;
      this.DeliveryPerson = false;
      this.DepartmentManager = false;
      this.NotConnected = false;
    } if (localStorage.getItem("AuthAuthorities").includes("DEPARTMENTMANAGER")) {
      this.Client = false;
      this.Admin = false;
      this.DeliveryPerson = false;
      this.DepartmentManager = true;
      this.NotConnected = false;
    } if (localStorage.getItem("AuthAuthorities").includes("DELIVERYPERSON")) {
      this.Client = false;
      this.Admin = false;
      this.DeliveryPerson = true;
      this.DepartmentManager = false;
      this.NotConnected = false;
    } if (localStorage.getItem("AuthAuthorities").includes(null)) {
      this.Client = false;
      this.Admin = false;
      this.DeliveryPerson = false;
      this.DepartmentManager = false;
      this.NotConnected = true;
    }
  }




  logOut() {
    localStorage.clear();
  }
//Nuber products in basket


nbrproductFun(){
  if (localStorage.getItem('cart')!=null){
    var cartCount=JSON.parse(localStorage.getItem('cart'));
    console.log(cartCount);
    this.basket = cartCount.length;
  }
}

  


}