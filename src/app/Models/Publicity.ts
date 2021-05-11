import { ChannelPublicity } from "./ChannelPublicity";
import { TargetPublicity } from "./TargetPublicity";

export class Publicity {
	idPublicity: number;
	namePublicity: string;
	startDatePublicity: Date;

	endDatePublicity: Date;

	targetPublicity: TargetPublicity;

	ChannelPublicity: ChannelPublicity;
	costPublicity: number;
	statusPublicity: boolean;
	mailOwnerPublicity: string;
	phoneOwnerPublicity: number;
	typePublicity: string;
	descriptionPublicity: string;
	InitialViewNumber: number;
	finalViewNumber: number;
	fileName: string;
}