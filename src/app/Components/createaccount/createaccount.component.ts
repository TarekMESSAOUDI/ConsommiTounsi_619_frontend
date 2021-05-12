import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CreateAccount } from '../../Models/CreateAccount';
import { SexeType } from '../../Models/SexeType';
import { UserService } from '../../Services/User/user.service';


@Component({
  selector: 'app-createaccount',
  templateUrl: './createaccount.component.html',
  styleUrls: ['./createaccount.component.css']
})
export class CreateaccountComponent implements OnInit {

  createaccount: CreateAccount;
  sexeType = SexeType;
  Keys(): Array<string> {
    var Keys = Object.keys(this.sexeType);
    return Keys;
  }

  msg = '';
  form: any = {};

  constructor(private userservice: UserService, private router: Router) { }

  ngOnInit(): void {
    
  }

  addUser() {
    this.createaccount = new CreateAccount(this.form.username, this.form.lastName, this.form.cinUser, this.form.password, this.form.confirmPasswordUser, this.form.phoneNumberUser, this.form.adressUser, this.form.birthDateUser, this.form.emailUser, this.form.sexeUser, this.form.role)
    this.userservice.addUser(this.createaccount).subscribe(
      data => {
        console.log(data);
        this.msg = 'User Added Succefully !';
        this.form = " ";
      },
      error => {
        console.log("exception occured");
        this.msg = 'Email or Username Alredy Exist !';
      }
    )
  }
}
