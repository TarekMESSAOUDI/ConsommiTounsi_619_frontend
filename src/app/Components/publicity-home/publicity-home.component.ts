import { Component, OnInit } from '@angular/core';
import { Publicity } from 'src/app/Models/Publicity';
import { PublicityService } from 'src/app/Services/Publicity/publicity.service';

@Component({
  selector: 'app-publicity-home',
  templateUrl: './publicity-home.component.html',
  styleUrls: ['./publicity-home.component.css']
})
export class PublicityHomeComponent implements OnInit {

  ListPubs: Publicity[];

  constructor(private ServicePublicity: PublicityService) { }

  ngOnInit(): void {

    this.ServicePublicity.getAllPublicities().subscribe(res => {
      console.log('hhhhjjjjj', res);
      this.ListPubs = res
    });
    console.log(this.ListPubs, 'jjkhljlk')
  }

}
