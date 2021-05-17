import { Component, OnInit } from '@angular/core';
import { CharityEvent } from 'src/app/Models/CharityEvent';
import { CharityEventService } from 'src/app/Services/CharityEvent/charity-event.service';

@Component({
  selector: 'app-event-home',
  templateUrl: './event-home.component.html',
  styleUrls: ['./event-home.component.css']
})
export class EventHomeComponent implements OnInit {
charityevent:CharityEvent=new CharityEvent;
msg = '';
  constructor(private CeS:CharityEventService) { }

  ngOnInit(): void {
  }

  Reserve(){
    this.CeS.addEvent(this.charityevent).subscribe(
      data => {
        console.log(data),
          
      this.msg = 'Event is reserved';},
      (error) => {
        console.log(error);
      });

  }



  }


