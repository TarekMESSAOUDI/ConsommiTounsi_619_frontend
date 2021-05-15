import { Component, OnInit } from '@angular/core';
import { Subject } from '../../Models/Subject';
import { SubjectService } from '../../Services/Subject/subject.service';

@Component({
  selector: 'app-statistic-administrator',
  templateUrl: './statistic-administrator.component.html',
  styleUrls: ['./statistic-administrator.component.css']
})
export class StatisticAdministratorComponent implements OnInit {
  subject: Subject;
  constructor(private subjectservice: SubjectService) { }


  ngOnInit(): void {
    
  }

  getsubjectstars() {
    this.subjectservice.getMaxStrasSubject().subscribe(
      data => { console.log(data) });
  }
}
