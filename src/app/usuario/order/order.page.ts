import { Component, OnInit } from '@angular/core';
import DetailOrder from 'src/app/core/models/detail-order';
import { Product } from 'src/app/core/models/product';
import { CartService } from 'src/app/core/services/cart.service';
import { OrderService } from 'src/app/core/services/order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.page.html',
  styleUrls: ['./order.page.scss'],
})
export class OrderPage implements OnInit {
  products:Product[]=[];
  productsCopy:Product[] = [];
  itemscart:number = 0;
  constructor(public _order:OrderService,public _cart:CartService) { }
  ngOnInit() {
    this._order.productos().subscribe((data:any)=>{
      console.log(data);
      this.products=data.products;
      this.productsCopy=data.products;
    })
  }
  addCart(product:Product) {
    const detailOrder=new DetailOrder(null,product._id,product,1);
    if(this._cart.order.detalles){
      const existe=this._cart.order.detalles.find((d)=>d.producto==product._id);
      if(existe){
        this._cart.order.detalles.forEach(d=>{
          if(d.producto==product._id){
            d.cantidad+=1;
          }
        })
      }else{
        this._cart.order.detalles.push(detailOrder);
      }
    }else{
      this._cart.order.detalles=[detailOrder];
    }
    console.log(this._cart.order);
    
    this.itemscart=this._cart.order.detalles.length;
  }
  buscarProducto(event:CustomEvent){
    var query=event.detail.value;
    query?query=query.toLowerCase():null;
    this.products=this.productsCopy.filter((product:Product)=>{
      return product.nombre.toLowerCase().includes(query);
    })
  }

}
