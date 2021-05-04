import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SexeType } from '../../Models/SexeType';
import { User } from '../../Models/User';
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

  user: User;
  ListUsers: Observable< User[]>;
  //user1: User = new User();
  msg = '';
  form: any = {};
  SexeUser: Observable<[SexeType]>;
  u: any = {};
  idUser: number;
  uu: Observable<User[]>;

  constructor(private route: ActivatedRoute, private userservice: UserService, private router: Router) { }

  ngOnInit(): void {

  }
  addUser() {
    this.AddUsers = true;
    this.ShowAllUsers = false;
    this.ShowUser = false;
    this.user = new User(this.form.username, this.form.lastName, this.form.cinUser, this.form.password, this.form.confirmPasswordUser, this.form.stateUser, this.form.phoneNumberUser, this.form.adressUser, this.form.birthDateUser, this.form.emailUser, this.form.sexeUser, this.form.accountNonLoked, this.form.lockTime, this.form.resettoken, this.form.isBlocked, this.form.blockDate, this.form.unBlockDate, this.form.isPrivate, this.form.salaire, this.form.pointNumber, this.form.avilaibility)
    this.userservice.ajouterUser(this.user).subscribe(
      data => {
        this.msg = 'User Adeded Succesfuly';
      },
      (error) => {
        console.log("exception occured");
        this.msg = 'Email or Username Alredy Exist !';
      }
    )
  }
  updateUser() {

    this.UpdateUser = true;
    this.AddUsers = false;
    this.DeleteUser = false;
    this.ShowAllUsers = false;
    this.ShowUser = false;
    this.userservice.updateUser(this.idUser, this.user).subscribe(
      data => {
        console.log(data),
          this.showAllUsers();
          this.msg = 'User Adeded Succesfuly';},
      (error) => {
        console.log(error);
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

  showUser(idu: number) {
    this.DeleteUser = false;
    this.UpdateUser = false;
    this.AddUsers = false;
    this.ShowAllUsers = false;
    this.ShowUser = true;
    this.user = new User(this.u.username, this.u.lastName, this.u.cinUser, this.u.password, this.u.confirmPasswordUser, this.u.stateUser, this.u.phoneNumberUser, this.u.adressUser, this.u.birthDateUser, this.u.emailUser, this.u.sexeUser, this.u.accountNonLoked, this.u.lockTime, this.u.resettoken, this.u.isBlocked, this.u.blockDate, this.u.unBlockDate, this.u.isPrivate, this.u.salaire, this.u.pointNumber, this.u.avilaibility);
    this.idUser = this.route.snapshot.params.idUser;
    this.userservice.getByIdUser(idu).subscribe(
      data => {
        this.showUser;
      },
      error =>
        console.log(error)
    );
  }
}
