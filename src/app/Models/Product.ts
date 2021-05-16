import { Department } from "./Department";
import { UnderCategory } from "./UnderCategory";

export class Product {
    idProduct: number;
    descriptionProduct: string;
    titleProduct: string;
    quantityProduct: number;
    buyingPriceProduct: number;
    priceProduct: number;
    weightProduct: number;
    maxQuantityProduct: number;
    fileName: string;
    barcodeProduct: object;
    UnderCategory: UnderCategory;
    likes:number;
    reduction:number;
    Department: Department;
}


