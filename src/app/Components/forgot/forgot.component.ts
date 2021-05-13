import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.css']
})
export class ForgotComponent implements OnInit {
  msg = '';
  form: any = {};
  constructor() { }

  ngOnInit(): void {
  }

  forgotPassword() {

  }

}
