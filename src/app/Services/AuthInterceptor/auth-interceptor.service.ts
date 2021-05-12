import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { __values } from 'tslib';
import { AuthenticationService } from '../Authenticate/authentication.service';
import { TokenstorageService } from '../TokenStorage/tokenstorage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {

  constructor(private token: AuthenticationService, private tokens: TokenstorageService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    let authReq = req;
    const token = localStorage.getItem("AuthToken");
    if (token != null) {
      authReq = req.clone({
        headers: req.headers.set(
          'Authorization', 'Bearer ' + token)
      });
    }
    return next.handle(authReq);
  }
}
