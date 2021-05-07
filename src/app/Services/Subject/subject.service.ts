import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Subject } from '../../Models/Subject';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  addSubjectURL = "http://localhost:9091/SpringMVC/servlet/add-subject";
  deletSubjectURL = "http://localhost:9091/SpringMVC/servlet/delete-subject";
  updateSubjectURL = "http://localhost:9091/SpringMVC/servlet/update-subject";
  getAllSubjectURL = "http://localhost:9091/SpringMVC/servlet/retrieve-all-subjects";
  getByIdSubjectURL = "http://localhost:9091/SpringMVC/servlet/retrieve-subject-by-id";
  getByTitleSubjectURL = "http://localhost:9091/SpringMVC/servlet/retrieve-subject-by-title";
  getByStarsgtSubjectURL = "http://localhost:9091/SpringMVC/servlet/retrieve-subject-by-starsgreater";
  getMoyStarsSubjectURL = "http://localhost:9091/SpringMVC/servlet/retrieve-moy-by-stars-subject";
  getMaxStrasSubjectURL = "http://localhost:9091/SpringMVC/servlet/retrieve-max-stars-subject";
  getMinStrasSubjectURL = "http://localhost:9091/SpringMVC/servlet/retrieve-min-stars-subject";
  getByStarsltSubjectURL = "http://localhost:9091/SpringMVC/servlet/retrieve-subject-by-starsless";

  constructor(private subjecthttp: HttpClient, private router: Router) { }

  addSubject(subject: Subject): Observable<any> {
    return this.subjecthttp.post<Subject>(this.addSubjectURL, subject).pipe(data => {
      return data;
    });
  }

  deletSubject(id: number): Observable<any> {
    return this.subjecthttp.delete(this.deletSubjectURL, { responseType: 'text' });
  }

  updateSubject(id: number, value: any): Observable<any> {
    return this.subjecthttp.put(this.updateSubjectURL, value);
  }

  getAllSubject(): Observable<any> {
    return this.subjecthttp.get(this.getAllSubjectURL);
  }

  getByIdSubject(id: number): Observable<any> {
    return this.subjecthttp.get(this.getByIdSubjectURL);
  }

  getByTitleSubject(title: string): Observable<any> {
    return this.subjecthttp.get(this.getByTitleSubjectURL);
  }

  getByStarsgtSubject(stars: number): Observable<any> {
    return this.subjecthttp.get(this.getByStarsgtSubjectURL);
  }

  getMaxStrasSubject(): Observable<any> {
    return this.subjecthttp.get(this.getMaxStrasSubjectURL);
  }

  getMinStrasSubject(): Observable<any> {
    return this.subjecthttp.get(this.getMinStrasSubjectURL);
  }

  getByStarsltSubject(stars: number): Observable<any> {
    return this.subjecthttp.get(this.getByStarsltSubjectURL);
  }
}
