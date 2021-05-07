import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Observable } from 'rxjs/internal/Observable';
import { Authenticate } from '../../Models/Authenticate';
import { JwtResponse } from '../../Models/JwtResponse';
import { TokenstorageService } from '../TokenStorage/tokenstorage.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
const TOKEN_KEY = 'AuthToken';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;

  authenticateURL = "http://localhost:9091/SpringMVC/servlet/authenticate";
 

  constructor(private authhttp: HttpClient, private tokenstorage: TokenstorageService, private router: Router) {
    //this.user = new User();
    this.currentUserSubject = new BehaviorSubject<any>(sessionStorage.getItem(TOKEN_KEY));
    this.currentUser = this.currentUserSubject.asObservable();
  }
  public get currentUserValue(): any {
    return this.currentUserSubject.value;
  }

  authenticate(authenticate: Authenticate) {
    return this.authhttp.post<JwtResponse>(this.authenticateURL, authenticate, httpOptions)

      .pipe((data => {


        this.authenticate;
        return data;
      }));
  }
}
