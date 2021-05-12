import { Token } from '@angular/compiler/src/ml_parser/lexer';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { JwtResponse } from '../../Models/JwtResponse';
import { Subject } from '../../Models/Subject';
import { SubjectService } from '../../Services/Subject/subject.service';

@Component({
  selector: 'app-forum-home',
  templateUrl: './forum-home.component.html',
  styleUrls: ['./forum-home.component.css']
})
export class ForumHomeComponent implements OnInit {
  sf: any = {};
  subject: Subject;
  hide: boolean;
  ListSubject: Observable<Subject[]>;
  ShowAllSubjects: boolean = true;
  ShowAddSubject: boolean;
  constructor(private subjectservice: SubjectService) { }

  ngOnInit(): void {
    if (localStorage.getItem("AuthAuthorities").includes("ADMINISTRATOR")) {
      this.ShowAddSubject = true;
    }
  }


  addSubject() {
    
    this.subject = new Subject(this.sf.titleSubject, this.sf.descriptionSubject)
    this.subjectservice.addSubject(this.subject).subscribe(
      data => {
        console.log(data)
      },
      (error) => {
        console.log(error);
        
      }
    )
  }

  showAllSubjects() {
    this.subjectservice.getAllSubject().subscribe(data => {
      this.ListSubject = data;
    },
      error => {
        console.log(error);
      });
  }

  showSubjectByTitle() {}
}
