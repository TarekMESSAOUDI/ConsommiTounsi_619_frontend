import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { __values } from 'tslib';
import { AuthenticationService } from '../Authenticate/authentication.service';
import { TokenstorageService } from '../TokenStorage/tokenstorage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {

  constructor(private token: AuthenticationService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    let authReq = req;
    const token = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0YXJlayIsImV4cCI6MTYyMDQzNzA4MCwiaWF0IjoxNjIwNDE5MDgwfQ.5oD8FAnOXmMmrlGKflmXCJCNT_q3SuSJNTBOiX-W9vIxrivOYFMULo6BFvqekpg2Qw98FwewLAk8L7DdPFfiWQ";
    if (token != null) {
      authReq = req.clone({
        headers: req.headers.set(
          'Authorization', 'Bearer' + token).set('Access-Control-Allow-Origin','*')
      });
    }
    return next.handle(authReq);
  }
}
