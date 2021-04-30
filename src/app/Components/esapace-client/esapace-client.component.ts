import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-esapace-client',
  templateUrl: './esapace-client.component.html',
  styleUrls: ['./esapace-client.component.css']
})
export class EsapaceClientComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  Logout() {
    localStorage.removeItem("Token");
    localStorage.removeItem("Type");
    localStorage.removeItem("Username");
    localStorage.removeItem("Authorities");
  }

}
