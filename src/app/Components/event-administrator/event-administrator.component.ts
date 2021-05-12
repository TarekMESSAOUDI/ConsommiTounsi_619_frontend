import { Component, OnInit } from '@angular/core';
import { CharityEvent } from 'src/app/Models/CharityEvent';
import { CharityEventService } from 'src/app/Services/CharityEvent/charity-event.service';

@Component({
  selector: 'app-event-administrator',
  templateUrl: './event-administrator.component.html',
  styleUrls: ['./event-administrator.component.css']
})
export class EventAdministratorComponent implements OnInit {
  ListCharityEvent:CharityEvent[];
  constructor(private CeService:CharityEventService) { 
    this.CeService.retrieveallEvent().subscribe(res=>{console.log(res);
      this.ListCharityEvent=res});
  }

  ngOnInit(): void {
  }

}
