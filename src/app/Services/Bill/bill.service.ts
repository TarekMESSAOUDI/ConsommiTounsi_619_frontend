import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Bill } from 'src/app/Models/Bill';

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
  //GetAllBillByOrderURL = "http://localhost:9091/SpringMVC/servlet/getAllBill_by_Order";
  ModifyTypeBillURL = "http://localhost:9091/SpringMVC/servlet/modify_type_bill";
  GetPaymentTypeByIdBill = "http://localhost:9091/SpringMVC/servlet/get_payment_type_by_idBill";
  ShowPDFByIdBillURL = "http://localhost:9091/SpringMVC/servlet/showPDF";


  constructor(private billhttp: HttpClient, private router: Router) { }

  addBill(bill:Bill){
    return this.billhttp.post<Bill>(this.addBillURL,bill);
  }

  getAllBill():Observable<Bill[]>{
    return this.billhttp.get<Bill[]>(this.GetAllBillURL);
  }

  deletetBillById(id:number){
    return this.billhttp.delete(this.DeletBillURL+id);
  }

  updatebill(id: number, value: any): Observable<any> {
    return this.billhttp.put(this.ModifyBillURL, value);
  }

  updateTypebill(id: number, paymentType: String): Observable<any> {
    return this.billhttp.put(this.ModifyTypeBillURL, paymentType);
  }

  getBillById(id: number): Observable<any> {
    return this.billhttp.get(this.GetBillByIdURL);
  }

  getBillByType(paymentType: string): Observable<any> {
    return this.billhttp.get(this.GetBillByTypeURL);
  }

  getPaymentTypeByIdBill(id: number): Observable<any> {
    return this.billhttp.get(this.GetPaymentTypeByIdBill);
  }

  showPdf(id: number): Observable<any> {
    return this.billhttp.get(this. ShowPDFByIdBillURL);
  }

}
