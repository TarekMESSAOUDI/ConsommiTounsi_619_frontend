import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-esapace-administrator',
  templateUrl: './esapace-administrator.component.html',
  styleUrls: ['./esapace-administrator.component.css']
})
export class EsapaceAdministratorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  logOut() {
    localStorage.clear();
  }
}
