import { Component, OnInit } from '@angular/core';
import DetailOrder from 'src/app/core/models/detail-order';
import { OrderFoods } from 'src/app/core/models/order-foods';
import OtersProduct from 'src/app/core/models/oters-products';
import { CartService } from 'src/app/core/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {
  otros:boolean = false;
  order:OrderFoods=new OrderFoods();
  otherproduct:OtersProduct=new OtersProduct();
  constructor(public _cart:CartService) { 
  }
  ngOnInit() {
    this.order=this._cart.order;
  }
  eliminarProducto(index:number){
    this._cart.order.detalles.splice(index, 1);
  }
  eliminarOtroProducto(index:number){
    this._cart.order.otrosproductos.splice(index, 1);
  }
  addOtherProduct(other:OtersProduct){
    this._cart.order.otrosproductos.push(other);
    this.otherproduct=new OtersProduct();
  }
  showFormOtros(){
    this.otros=true;
  }
  changeQuantity(index:number,op:string){
        if(op=="r"){
          var actual=this._cart.order.detalles[index].cantidad;
          if(actual>1){
            this._cart.order.detalles[index].cantidad=(actual-1);
          }
        }else{
          var actual=this._cart.order.detalles[index].cantidad;
          this._cart.order.detalles[index].cantidad=(actual+=1);
        }
    
  }
}
