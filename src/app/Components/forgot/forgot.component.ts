import { Component, OnInit } from '@angular/core';
import { UserService } from '../../Services/User/user.service';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.css']
})
export class ForgotComponent implements OnInit {
  msg = '';
  form: any = {};
  email: string;
  constructor(private userservice: UserService) { }

  ngOnInit(): void {
  }

  forgotPassword() {
    this.email = this.form.emailUser;
    this.userservice.forgotPassword(this.email).subscribe(
      data => {
        console.log(data)
        this.msg = 'Mail Sended Succesfully';
        this.form = " ";
      },
      error => {
        console.log(error)
        this.msg = 'cannot found user with this email';
        this.form = " ";
      });

  }

}
