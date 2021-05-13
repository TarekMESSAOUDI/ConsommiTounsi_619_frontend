import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../Authenticate/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthorizeclientguardService implements CanActivate {

  constructor(private authservice: AuthenticationService,
    private router: Router) { }
  canActivate() {
    if (localStorage.getItem("AuthAuthorities").includes(null) || localStorage.getItem("AuthAuthorities").includes("ADMINISTRATOR")
    || localStorage.getItem("AuthAuthorities").includes("DELIVERYPERSON") || localStorage.getItem("AuthAuthorities").includes("DEPARTMENTMANAGER")  ) {
      this.router.navigate(['/home/authentificate']);
       return false;
    }
    return true;
    }
}
