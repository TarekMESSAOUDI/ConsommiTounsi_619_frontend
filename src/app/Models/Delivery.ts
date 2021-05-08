import { MeansOfTransport } from "./MeansOfTransport";
import { Status } from "./Status";

export class Delivery {

    idDelivery:number ;
	dateDelivery:Date ;
	placeDelivery:string ;
	stateDelivery:boolean ;
	NameProduct:string;
	DetailleDelivery:string;
	meansOfTransportDelivery : MeansOfTransport;
	adressDelivery:string ;
	finishedDelivery:Boolean;
	status:Status;
	kilometrage:number;
	costs:number;
}