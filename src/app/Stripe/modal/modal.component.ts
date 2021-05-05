import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { PaymentService } from '../payment/payment.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @Input() id;
  @Input() nombre;
  @Input() descripcion;
  @Input() precio;

  constructor(
    public activeModal: NgbActiveModal,
    private paymentService: PaymentService,
    private toastrService: ToastrService
  ) { }

  ngOnInit() {
  }

  confirmar(id: string): void {
    this.paymentService.confirmar(id).subscribe(
      data => {
        this.toastrService.success
        ('pago confirmado', 'se ha confirmado el pago con id ' + data[`id`], {positionClass: 'toast-top-center', timeOut: 3000});
        this.activeModal.close();
      },
      err => {
        console.log(err);
        this.activeModal.close();
      }
    );
  }

  cancelar(id: string): void {
    this.paymentService.cancelar(id).subscribe(
      data => {
        this.toastrService.success
        ('pago cancelado', 'se ha cancelado el pago con id ' + data[`id`], {positionClass: 'toast-top-center', timeOut: 3000});
        this.activeModal.close();
      },
      err => {
        console.log(err);
        this.activeModal.close();
      }
    );
  }

}

