
import { Component, OnInit,Input } from '@angular/core';
import { Router } from '@angular/router';
import { Publicity } from 'src/app/Models/Publicity';
import { PublicityService } from 'src/app/Services/Publicity/publicity.service';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';



@Component({
  selector: 'ngbd-modal-content',
  template: `
    <div class="modal-header">
      <h4 class="modal-title">Hi there!</h4>
      <button
        type="button"
        class="close"
        aria-label="Close"
        (click)="activeModal.dismiss('Cross click')"
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      <p>
        Your publicity has been added to the database. Thank
        you!
      </p>
    </div>
    <div class="modal-footer">
      <button
        type="button"
        class="btn btn-outline-dark"
        (click)="activeModal.close('Close click')"
      >
        Close
      </button>
    </div>
  `,
})




export class NgbdModalContent {
  @Input() name;

  constructor(public activeModal: NgbActiveModal) {}
}









@Component({
  selector: 'app-publicity-administrator',
  templateUrl: './publicity-administrator.component.html',
  styleUrls: ['./publicity-administrator.component.css'],
})

export class PublicityAdministratorComponent implements OnInit {
  ListPublicities: Publicity[];
  showIntPub: boolean;
  AddIntPub: boolean;
  PublicityToUpdate: any;
  updateProductInt: boolean;
  publicity: Publicity = new Publicity();
  
  
  constructor(
    public PublicityService: PublicityService,private modalService: NgbModal,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.PublicityService.getAllPublicities().subscribe((res) => {
      console.log('hhhhjjjjj', res);
      this.ListPublicities = res;
    });
    console.log(this.ListPublicities, 'jjkhljlk');
  }
  showAllPub() {
    this.showIntPub = true;
    this.AddIntPub = false;
    this.updateProductInt = false;
  }
  open() {
    const modalRef = this.modalService.open(NgbdModalContent);
    modalRef.componentInstance.name = 'World';
  }
  showInAddPub() {
    this.AddIntPub = true;
    this.showIntPub = false;
  }

  deletePublicity(id: number) {
    this.PublicityService.deletePublicity(id).subscribe(() =>
      this.PublicityService.getAllPublicities().subscribe((res) => {
        this.ListPublicities = res;
      })
    );
  }
  addPublicity() {
    
    console.log(this.publicity);
    console.log('date',this.publicity.endDatePublicity);

    var startIndex =
      this.publicity.fileName.indexOf('\\') >= 0
        ? this.publicity.fileName.lastIndexOf('\\')
        : this.publicity.fileName.lastIndexOf('/');
    var filename = this.publicity.fileName.substring(startIndex);
    if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
      filename = filename.substring(1);
    }
    this.publicity.fileName = filename;
    console.log('--', filename);
    console.log(this.publicity);
    this.PublicityService.addPublicity(this.publicity).subscribe(() =>
      this.PublicityService.getAllPublicities().subscribe((res) => {
        this.ListPublicities = res;
      })
    );
    console.log('Lenghth after add', this.ListPublicities.length);
    this.open();
    window.setTimeout(this.reload, 3000);
  }
  
  
  reload() {
    window.location.reload();
  }
  updatePublicity(id: number, publicity: Publicity) {
    console.log('publicityOld', publicity);
    console.log('PubJdida', this.PublicityToUpdate);
    var startIndex =
      this.PublicityToUpdate.fileName.indexOf('\\') >= 0
        ? this.PublicityToUpdate.fileName.lastIndexOf('\\')
        : this.publicity.fileName.lastIndexOf('/');
    var filename = this.PublicityToUpdate.fileName.substring(startIndex);
    if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
      filename = filename.substring(1);
    }
    this.PublicityToUpdate.fileName = filename;
    this.PublicityService.updatePublicity(id, publicity).subscribe(() =>
      this.PublicityService.getAllPublicities().subscribe((res) => {
        this.ListPublicities = res;
      })
    );
    this.PublicityService.getAllPublicities();
  }

  updateProductInterface(id: number, publicity: Publicity) {
    this.updateProductInt = true;
    this.showIntPub = false;
    console.log(id, publicity);
    console.log(publicity);
    this.PublicityToUpdate = publicity;
    console.log('hhh', this.PublicityToUpdate);
  }
}
