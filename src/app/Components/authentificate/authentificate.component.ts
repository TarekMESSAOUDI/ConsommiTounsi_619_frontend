import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Authenticate } from '../../Models/Authenticate';
import { Role } from '../../Models/Role';
import { User } from '../../Models/User';
import { AuthenticationService } from '../../Services/Authenticate/authentication.service';
import { TokenstorageService } from '../../Services/TokenStorage/tokenstorage.service';
import { UserService } from '../../Services/User/user.service';

@Component({
  selector: 'app-authentificate',
  templateUrl: './authentificate.component.html',
  styleUrls: ['./authentificate.component.css']
})
export class AuthentificateComponent implements OnInit {

  form: any = {};
  user: User;
  msg = '';
  role: Role;
  constructor(private authservice: AuthenticationService,
    private tokenstorage: TokenstorageService,
              private router: Router) { }

  ngOnInit(): void {
  }

   authenticat() {

     this.authservice.authenticate(new Authenticate(this.form.username, this.form.password)).subscribe(
       data => {
         localStorage.setItem('Token', data.jwttoken)
         localStorage.setItem('Type', data.type)
         localStorage.setItem('Username', data.username)
         localStorage.setItem('Authorities', data.authorities)
      },
      error => {
      this.msg = 'Username Or password Invalid';
      }
    )
  }

}
