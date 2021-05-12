import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Authenticate } from '../../Models/Authenticate';
import { Role } from '../../Models/Role';
import { User } from '../../Models/User';
import { AuthenticationService } from '../../Services/Authenticate/authentication.service';
import { TokenstorageService } from '../../Services/TokenStorage/tokenstorage.service';

@Component({
  selector: 'app-authentificate',
  templateUrl: './authentificate.component.html',
  styleUrls: ['./authentificate.component.css']
})
export class AuthentificateComponent implements OnInit {
  form: any = {};
  msg = '';
  roles: string[];
  constructor(private authservice: AuthenticationService,
    private tokenstorage: TokenstorageService,
              private router: Router) { }

  ngOnInit(): void {
  }

   authenticat() {

     this.authservice.authenticate(new Authenticate(this.form.username, this.form.password)).subscribe(
       data => {
         this.tokenstorage.saveToken(data.jwttoken)
         localStorage.setItem('Type', data.type)
         this.tokenstorage.saveUsername(data.username)
         this.tokenstorage.saveAuthorities(data.authorities)
         
         this.router.navigate(["/home"])
      },
      error => {
      this.msg = 'Username Or password Invalid';
      }
    )
  }

}
