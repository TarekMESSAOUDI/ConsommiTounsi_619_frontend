import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second-nav',
  templateUrl: './second-nav.component.html',
  styleUrls: ['./second-nav.component.css']
})
export class SecondNavComponent implements OnInit {

  Showsidebare: boolean;
  constructor() { }

  ngOnInit(): void {
    if (localStorage.getItem("AuthAuthorities").includes("DEPARTMENTMANAGER")) {
      this.Showsidebare = true;
    }
  }

}
