import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthenticationService } from '../Authenticate/authentication.service';
import { TokenstorageService } from '../TokenStorage/tokenstorage.service';
import { UserService } from '../User/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthorizeGuardService implements CanActivate{

  constructor(private authservice: AuthenticationService,
    private router: Router) { }

  canActivate() {
    if (localStorage.getItem("AuthAuthorities").includes(null)
      || localStorage.getItem("AuthAuthorities").includes("CLIENT")
      || localStorage.getItem("AuthAuthorities").includes("DELIVERYPERSON")
      || localStorage.getItem("AuthAuthorities").includes("DEPARTMENTMANAGER")) {
      this.router.navigate(['/home/authentificate']);
      return false;
    }
    return true;
  }

}
