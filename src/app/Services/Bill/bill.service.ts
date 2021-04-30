import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class BillService {

    addBillURL = "http://localhost:9091/SpringMVC/servlet/add-bill";
  GetAllBillURL = "http://localhost:9091/SpringMVC/servlet/getAllBill";
  DeletBillURL = "http://localhost:9091/SpringMVC/servlet/delete-bill";
  ModifyBillURL = "http://localhost:9091/SpringMVC/servlet/modify-bill";
  GetBillByIdURL = "http://localhost:9091/SpringMVC/servlet/getBill_by_ID";
  GetBillByTypeURL = "http://localhost:9091/SpringMVC/servlet/getBill_by_Type";
  GetAllBillByOrderURL = "http://localhost:9091/SpringMVC/servlet/getAllBill_by_Order";
  ModifyTypeBillURL = "http://localhost:9091/SpringMVC/servlet/modify_type_bill";
  GetPaymentTypeByIdBill = "http://localhost:9091/SpringMVC/servlet/get_payment_type_by_idBill";
  ShowPDFByIdBillURL = "http://localhost:9091/SpringMVC/servlet//showPDF";


  constructor(private billthttp: HttpClient, private router: Router) { }
}
