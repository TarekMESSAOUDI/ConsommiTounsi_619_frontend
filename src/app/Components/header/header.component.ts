import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Authenticate } from '../../Models/Authenticate';
import { Role } from '../../Models/Role';
import { User } from '../../Models/User';
import { TokenstorageService } from '../../Services/TokenStorage/tokenstorage.service';
import { UserService } from '../../Services/User/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  constructor(private userservice: UserService, private tokenstorage: TokenstorageService, private router: Router, public translate:TranslateService) { }




  ngOnInit(): void {
   
  }



  

  }

