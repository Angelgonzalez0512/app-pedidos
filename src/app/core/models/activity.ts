import { User } from "./user";

export class Activity {
    public constructor(
        public _id?:string,
       public codigo?: string,
       public nombre?:string,
       public usuario?:User,
       public usuarioid?:string,
       public transacciones?:any[],
       public colaboradores?:any[],
       public area?:string,
       public cedula?:string,
       public fechainicio?:string,
       public fechafin?:string,
       public descripcion?:string,
       public estado?:string
       ){}
}
