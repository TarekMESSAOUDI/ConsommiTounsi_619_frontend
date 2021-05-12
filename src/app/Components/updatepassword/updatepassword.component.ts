import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-updatepassword',
  templateUrl: './updatepassword.component.html',
  styleUrls: ['./updatepassword.component.css']
})
export class UpdatepasswordComponent implements OnInit {
  form: any = {};
  msg = '';
  constructor() { }

  ngOnInit(): void {
  }

  updatePassword() {

  }

}
