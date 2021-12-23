import { Product } from "./product";
export default class DetailOrder {
    public constructor(public _id?:string,public producto?:string, public _producto?:Product,public cantidad?:number){}
}