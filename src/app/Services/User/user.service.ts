import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CreateAccount } from '../../Models/CreateAccount';
import { JwtResponse } from '../../Models/JwtResponse';
import { Role } from '../../Models/Role';
import { User } from '../../Models/User';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  addUserURL = "http://localhost:9091/SpringMVC/servlet/add-user";
  deleteUserURL = "http://localhost:9091/SpringMVC/servlet/delete-user";
  updateUserURL = "http://localhost:9091/SpringMVC/servlet/update-user";
  getAllUserURL = "http://localhost:9091/SpringMVC/servlet/retrieve-all-user";
  getByIdUserURL = "http://localhost:9091/SpringMVC/servlet/retrieve-user-by-id";
  getByPointUserURL = "http://localhost:9091/SpringMVC/servlet/retrieve-user-by-point";
  getByUsernameUserURL = "http://localhost:9091/SpringMVC/servlet/retrieve-user-by-username";
  getByStateUserURL = "http://localhost:9091/SpringMVC/servlet/retrieve-user-by-state";
  getByAdressUserURL = "http://localhost:9091/SpringMVC/servlet/retrieve-user-by-adress";
  getByDateUserURL = "http://localhost:9091/SpringMVC/servlet/retrieve-user-by-date";
  getBySexeUserURL = "http://localhost:9091/SpringMVC/servlet/retrieve-user-by-sexe";
  getByEmailUserURL = "http://localhost:9091/SpringMVC/servlet/retrieve-user-by-email";
  getBySalaireUserURL = "http://localhost:9091/SpringMVC/servlet/retrieve-user-by-salaire";
  getBySalairegtUserURL = "http://localhost:9091/SpringMVC/servlet/retrieve-user-by-salairegt";
  getBySalaireltUserURL = "http://localhost:9091/SpringMVC/servlet/retrieve-user-by-salairelt";
  getByRoleUserURL = "http://localhost:9091/SpringMVC/servlet/retrieve-user-by-role";
  getAllNamesUserURL = "http://localhost:9091/SpringMVC/servlet/users-names";
  getActivateUserURL = "http://localhost:9091/SpringMVC/servlet/activate-user";
  getDesactivateUserURL = "http://localhost:9091/SpringMVC/servlet/desactivate-User";
  getCountUserURL = "http://localhost:9091/SpringMVC/servlet/count-user";
  findActivateUserURL = "http://localhost:9091/SpringMVC/servlet/findActivatedUser";
  getDisabledUserURL = "http://localhost:9091/SpringMVC/servlet/findDisabledUser";
  getMoySalaireUserURL = "http://localhost:9091/SpringMVC/servlet/moy-salaire";
  getSommeSalaireUserURL = "http://localhost:9091/SpringMVC/servlet/somme-salaire";
  getMaxSalaireUserURL = "http://localhost:9091/SpringMVC/servlet/max-salaire";
  getMinAgeUserURL = "http://localhost:9091/SpringMVC/servlet/min-age";

  constructor(private userhttp: HttpClient, private router: Router) {
  }

  addUser(createaccount: CreateAccount) {
    return this.userhttp.post<JwtResponse>(this.addUserURL, createaccount, httpOptions)
      .pipe(data => {
      return data;
    });
  }

  ajouterUser(user: User): Observable<any> {
    return this.userhttp.post(this.addUserURL, user);
  }

  deleteUser(id: number): Observable<any> {
    return this.userhttp.delete(this.deleteUserURL, { responseType: 'text' });
  }

  updateUser(id: number, value: any): Observable<any> {
    return this.userhttp.put(this.updateUserURL, value);
  }

  getAllUser(): Observable<any> {
    return this.userhttp.get(this.getAllUserURL);
  }

  getByIdUser(id: number): Observable<any> {
    return this.userhttp.get(this.getByIdUserURL);
  }

  getByPointUser(point: number): Observable<any> {
    return this.userhttp.get(this.getByPointUserURL);
  }

  getByUsernameUser(username: string): Observable<any> {
    return this.userhttp.get(this.getByUsernameUserURL);
  }

  getByStateUser(state: boolean): Observable<any> {
    return this.userhttp.get(this.getByStateUserURL);
  }

  getByAdressUser(adress: string): Observable<any> {
    return this.userhttp.get(this.getByAdressUserURL);
  }

  getByDateUser(date: Date): Observable<any> {
    return this.userhttp.get(this.getByDateUserURL);
  }

  getBySexeUser(sexe: string): Observable<any> {
    return this.userhttp.get(this.getBySexeUserURL);
  }

  getByEmailUser(email: string): Observable<any> {
    return this.userhttp.get(this.getByEmailUserURL);
  }

  getBySalaireUser(salaire: number): Observable<any> {
    return this.userhttp.get(this.getBySalaireUserURL);
  }

  getBySalairegtUser(salaire: number): Observable<any> {
    return this.userhttp.get(this.getBySalairegtUserURL);
  }

  getBySalaireltUser(salaire: string): Observable<any> {
    return this.userhttp.get(this.getBySalaireltUserURL);
  }

  getByRoleUser(role: Role): Observable<any> {
    return this.userhttp.get(this.getByRoleUserURL);
  }

  getAllNamesUser(): Observable<any> {
    return this.userhttp.get(this.getAllNamesUserURL);
  }

  getActivateUser(): Observable<any> {
    return this.userhttp.get(this.getActivateUserURL);
  }

  getDesactivateUser(): Observable<any> {
    return this.userhttp.get(this.getDesactivateUserURL);
  }

  getCountUser(): Observable<any> {
    return this.userhttp.get(this.getCountUserURL);
  }

  findActivateUser(): Observable<any> {
    return this.userhttp.get(this.findActivateUserURL);
  }

  getDisabledUser(): Observable<any> {
    return this.userhttp.get(this.getDisabledUserURL);
  }

  getMoySalaireUser(): Observable<any> {
    return this.userhttp.get(this.getMoySalaireUserURL);
  }

  getSommeSalaireUser(): Observable<any> {
    return this.userhttp.get(this.getSommeSalaireUserURL);
  }

  getMaxSalaireUser(): Observable<any> {
    return this.userhttp.get(this.getMaxSalaireUserURL);
  }

  getMinAgeUser(): Observable<any> {
    return this.userhttp.get(this.getMinAgeUserURL);
  }
}
