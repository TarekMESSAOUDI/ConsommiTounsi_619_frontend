import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Publicity } from 'src/app/Models/Publicity';
import { PublicityService } from 'src/app/Services/Publicity/publicity.service';

@Component({
  selector: 'app-publicity-administrator',
  templateUrl: './publicity-administrator.component.html',
  styleUrls: ['./publicity-administrator.component.css']
})
export class PublicityAdministratorComponent implements OnInit {
  ListPublicities: Publicity[];
  showIntPub: boolean;
  AddIntPub: boolean;
  PublicityToUpdate: any;
  updateProductInt: boolean;
  publicity: Publicity = new Publicity();

  constructor(public PublicityService: PublicityService, private router: Router) { }


  ngOnInit(): void {
    this.PublicityService.getAllPublicities().subscribe(res => {
      console.log('hhhhjjjjj', res);
      this.ListPublicities = res
    });
    console.log(this.ListPublicities, 'jjkhljlk')
  }
  showAllPub() {
    this.showIntPub = true;
    this.AddIntPub = false;
    this.updateProductInt = false;

  }

  showInAddPub() {
    this.AddIntPub = true;
    this.showIntPub = false;
  }

  deletePublicity(id: number) {
    this.PublicityService.deletePublicity(id).subscribe(() => this.PublicityService.getAllPublicities().subscribe(res => { this.ListPublicities = res }));
  }
  addPublicity() {
    console.log("Lenghth before add", this.ListPublicities.length)
    console.log(this.publicity)
    var startIndex = (this.publicity.fileName.indexOf('\\') >= 0 ? this.publicity.fileName.lastIndexOf('\\') : this.publicity.fileName.lastIndexOf('/'));
    var filename = this.publicity.fileName.substring(startIndex);
    if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
      filename = filename.substring(1);
    }
    this.publicity.fileName = filename;
    console.log("--", filename)
    console.log(this.publicity)
    this.PublicityService.addPublicity(this.publicity).subscribe(() => this.PublicityService.getAllPublicities().subscribe(res => { this.ListPublicities = res }));
    console.log("Lenghth after add", this.ListPublicities.length)

  }

  updatePublicity(id: number, publicity: Publicity) {
    console.log("publicity", publicity)
    console.log("jdida", this.PublicityToUpdate)
    this.PublicityService.updatePublicity(id, publicity).subscribe(() => this.PublicityService.getAllPublicities().subscribe(res => { this.ListPublicities = res }));
    this.PublicityService.getAllPublicities();

  }


  updateProductInterface(id: number, publicity: Publicity) {
    this.updateProductInt = true;
    this.showIntPub = false;
    console.log(id, publicity)
    console.log(publicity)
    this.PublicityToUpdate = publicity;
    console.log('hhh', this.PublicityToUpdate)
  }






}
