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
    localStorage.removeItem('Token');
    localStorage.removeItem('Type');
    localStorage.removeItem('Username');
    localStorage.removeItem('Authorities');
  }
}
