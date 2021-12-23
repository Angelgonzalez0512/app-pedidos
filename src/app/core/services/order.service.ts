import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product';
import { User } from '../models/user';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class OrderService extends BaseService<User,string> {
  constructor(public http:HttpClient) {
    super(http,"orderfoods","");
   }
   productos():Observable<Product[]>{
     return this.http.get<Product[]>(`${this.host}/product/alimentos`,{headers: this.headers()});
   }
}