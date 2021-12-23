import DetailOrder from "./detail-order";
import OtersProduct from "./oters-products";
import { User } from "./user";

export class OrderFoods {
    public detalles:DetailOrder[]=[];
    public otrosproductos:OtersProduct[]=[];
    public constructor(
        public _id?:string,
       public codigo?:string,
       public usuario?:User,
       public usuarioid?:string,
       public transaciones?:any[],
       public area?:string,
       public cedula?:string,
       public fecha?:string,
       public descripcion?:string,
       public estado?:string){}
}
