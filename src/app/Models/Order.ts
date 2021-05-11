import { PaymentType } from "./PaymentType";

export class Order {
    idOrder:number ;
	dateOrder:Date ;
	productNumberOrder:number ;
	stateOrder:string ;
	amountOrder:number ;
	paymentType:PaymentType ;
}