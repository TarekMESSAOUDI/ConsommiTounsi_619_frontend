import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  user: User;
  ListUsers: Observable< User[]>;
  //user1: User = new User();
  msg = '';
  form: any = {};
  SexeUser: Observable<[SexeType]>;

  constructor(private userservice: UserService, private router: Router) { }

  ngOnInit(): void {

  }
  addUser() {
    this.AddUsers = true;
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
  }
  deleteUser(idUser: number) {
    this.DeleteUser = false;
    this.UpdateUser = false;
    this.AddUsers = false;
    this.ShowAllUsers = true;
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
    this.userservice.getAllUser().subscribe(data => {
      this.ListUsers = data;
    },
      error => {
        console.log(error);
    });

  }

}
