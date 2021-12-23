import { Injectable } from '@angular/core';
import { OrderFoods } from '../models/order-foods';

@Injectable({
  providedIn: 'root'
})
export class CartService{
    public order:OrderFoods=new OrderFoods();
    constructor(){}
}