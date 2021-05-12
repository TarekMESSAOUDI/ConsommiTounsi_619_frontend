import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CharityEvent } from 'src/app/Models/CharityEvent';

@Injectable({
  providedIn: 'root'
})
export class CharityEventService {

  addEventURL="http://localhost:9090/SpringMVC/servlet/addEvent";
  retrieveallEventURL="http://localhost:9090/SpringMVC/servlet/retrieveallEvent";
  deleteEventURL="http://localhost:9090/SpringMVC/servlet/remove-event";
  affectEventToClientURL:"http://localhost:9090/SpringMVC/servlet/FaireReservation";
  addReservationURL:"http://localhost:9090/SpringMVC/servlet/addReservation";


  constructor(private Eventhttp: HttpClient, private router: Router) { }

  addEvent(charityEvent: CharityEvent): Observable<any> {
    return this.Eventhttp.post(this.addEventURL, charityEvent);
  }

  retrieveallEvent(): Observable<any> {
    return this.Eventhttp.get(this.retrieveallEventURL);
  }
  deleteEvent(id: number): Observable<any> {
    return this.Eventhttp.delete(this.deleteEventURL, { responseType: 'text' });
  }
  affectEventToClient(charityEvent: CharityEvent): Observable<any>  {
    return this.Eventhttp.post(this. affectEventToClientURL, charityEvent);
  }

  addReservation(charityEvent: CharityEvent): Observable<any> {
    return this.Eventhttp.post(this.addReservationURL, charityEvent);
  }


}
