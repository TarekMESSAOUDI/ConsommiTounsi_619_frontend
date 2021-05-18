import { PaymentType } from "./PaymentType";
import { Product } from "./Product";

export class Order {
    idOrder:number ;
	dateOrder:Date ;
	productNumberOrder:number ;
	stateOrder:string ;
	amountOrder:number ;
	paymentType:PaymentType ;
	product:Product
}