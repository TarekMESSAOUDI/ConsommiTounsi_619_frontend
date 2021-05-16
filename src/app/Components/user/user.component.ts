import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Role } from '../../Models/Role';
import { SexeType } from '../../Models/SexeType';
import { User } from '../../Models/User';
import { ZoneMap } from '../../Models/ZoneMap';
import { UserService } from '../../Services/User/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  ShowAllUsers: boolean;
  UpdateUser: boolean;
  DeleteUser: boolean;
  AddUsers: boolean;
  ShowUser: boolean;

  nameUser: string;

  roleType = Role;
  Keysr(): Array<string> {
    var Keys = Object.keys(this.roleType);
    return Keys;
  }


  sexeType = SexeType;
  Keyss(): Array<string> {
    var Keys = Object.keys(this.sexeType);
    return Keys;
  }

  zoneType = ZoneMap;
  Keysz(): Array<string> {
    var Keys = Object.keys(this.zoneType);
    return Keys;
  }
  user: User;
  usere: User;
  userf: User[];
  ListUsers: User[];
  msg = '';
  form: any = {};
  forme: any = {};
  SexeUser: Observable<[SexeType]>;
  u: any = {};
  uu: Observable<User[]>;
  id: any;
  hideall: boolean;
  hidesearch: boolean = true;
  idUser: any;
  username: string;

  constructor(private route: ActivatedRoute, private userservice: UserService, private router: Router) { }

  ngOnInit(): void {

  }
  addUser() {
    this.AddUsers = true;
    this.ShowAllUsers = false;
    this.ShowUser = false;
    this.user = new User(this.form.idUser, this.form.username, this.form.lastName, this.form.cinUser, this.form.password, this.form.confirmPasswordUser, this.form.stateUser, this.form.phoneNumberUser, this.form.adressUser, this.form.birthDateUser, this.form.emailUser, this.form.sexeUser, this.form.accountNonLoked, this.form.lockTime, this.form.resettoken, this.form.isBlocked, this.form.blockDate, this.form.unBlockDate, this.form.isPrivate, this.form.salaire, this.form.pointNumber, this.form.avilaibility, this.form.zone, this.form.role, this.form.fileName)
    var startIndex =
      this.user.fileName.indexOf('\\') >= 0
        ? this.user.fileName.lastIndexOf('\\')
        : this.user.fileName.lastIndexOf('/');
    var filename = this.user.fileName.substring(startIndex);
    if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
      filename = filename.substring(1);
    }
    this.user.fileName = filename;
    
    this.userservice.ajouterUser(this.user).subscribe(
      data => {
        this.msg = 'User Adeded Succesfuly';
        this.form = " ";
      },
      (error) => {
        console.log("exception occured");
        this.msg = 'Email or Username Alredy Exist !';
      }
    )
  }
  updateUser(us: User) {

    this.UpdateUser = true;
    this.AddUsers = false;
    this.DeleteUser = false;
    this.ShowAllUsers = false;
    this.ShowUser = true;

    //this.username = this.user.username;
    //this.u = new User(this.forme.idUser,this.forme.username, this.forme.lastName, this.forme.cinUser, this.forme.password, this.forme.confirmPasswordUser, this.forme.stateUser, this.forme.phoneNumberUser, this.forme.adressUser, this.forme.birthDateUser, this.forme.emailUser, this.forme.sexeUser, this.forme.accountNonLoked, this.forme.lockTime, this.forme.resettoken, this.forme.isBlocked, this.forme.blockDate, this.forme.unBlockDate, this.forme.isPrivate, this.forme.salaire, this.forme.pointNumber, this.forme.avilaibility, this.forme.zone, this.forme.role)
    this.userservice.updateUser(us).subscribe(
      data => {
        console.log(data),  
        this.msg = 'User Updated Succesfuly';
      },
      (error) => {
        console.log(error);
        this.msg = 'error';
      });
  }

  deleteUser(idUser: number) {
    this.DeleteUser = false;
    this.UpdateUser = false;
    this.AddUsers = false;
    this.ShowAllUsers = true;
    this.ShowUser = false;
    this.userservice.deleteUser(idUser).subscribe(
      data => {
        this.showAllUsers();
      },
      error =>
        console.log(error)
    );
  }
  showAllUsers() {
    this.ShowAllUsers = true;
    this.UpdateUser = false;
    this.AddUsers = false;
    this.DeleteUser = false;
    this.ShowUser = false;
    this.userservice.getAllUser().subscribe(data => {
      this.ListUsers = data;
    },
      error => {
        console.log(error);
    });
  }

  showUser(u: User) {
    this.DeleteUser = false;
    this.UpdateUser = false;
    this.AddUsers = false;
    this.ShowAllUsers = false;
    this.ShowUser = true;
    this.user = u;
  }

  getUserByName(nu: any) {
    this.hideall = true;
    this.hidesearch = false;
    this.userservice.getByUsernameUser(nu).subscribe(data => {
      this.user = data;
    })
  }


  Search() {
    if (this.username != "") {


      this.ListUsers = this.ListUsers.filter(res => {
        return res.username.toLocaleLowerCase().match(this.username.toLocaleLowerCase());
      });
    }
    else if (this.username == "") {
      this.showAllUsers();
    }

  }
}
