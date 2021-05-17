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
  show:boolean;
  addevent:boolean;
  //charityevent:CharityEvent;
  msg = '';
  charityevent : CharityEvent=new CharityEvent();
 
  constructor(private CeService:CharityEventService) { 
    this.CeService.retrieveallEvent().subscribe(res=>{console.log(res);
      this.ListCharityEvent=res});
  }

  ngOnInit(): void {
  }

  ViewEvent(){
    this.show=true;
    this.addevent=false;
  }
  
  AddEventshow(){
    this.show=false;
    this.addevent=true;
  }

  addcharityevent(){

    this.show = false;
    this.addevent = true;
    this.CeService.addEvent(this.charityevent).subscribe(
      data => {
        console.log(data),
          this.AddEventshow();
          this.msg = 'Event added Succesfuly';},
      (error) => {
        console.log(error);
      });
    }
    

    DeleteEvent(id:number){
      this.CeService.deleteEvent(id).subscribe(()=>this.CeService.retrieveallEvent().subscribe(res=>{this. ListCharityEvent=res}));
    }}
  


