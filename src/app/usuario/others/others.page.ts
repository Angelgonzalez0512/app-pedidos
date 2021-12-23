import { Component, OnInit } from '@angular/core';
import { OrderFoods } from 'src/app/core/models/order-foods';
import OtersProduct from 'src/app/core/models/oters-products';
import { CartService } from 'src/app/core/services/cart.service';

@Component({
  selector: 'app-others',
  templateUrl: './others.page.html',
  styleUrls: ['./others.page.scss'],
})
export class OthersPage implements OnInit {
  order:OrderFoods=new OrderFoods();
  otherproduct:OtersProduct=new OtersProduct();
  constructor(public _cart:CartService) { 
  }
  ngOnInit() {
    this.order=this._cart.order;
  }
 
  eliminarOtroProducto(index:number){
    this._cart.order.otrosproductos.splice(index, 1);
  }
  addOtherProduct(other:OtersProduct){
    this._cart.order.otrosproductos.push(other);
    this.otherproduct=new OtersProduct();
  }


}