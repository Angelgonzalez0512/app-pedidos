import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Area } from 'src/app/core/models/area';
import { OrderFoods } from 'src/app/core/models/order-foods';
import { AuthService } from 'src/app/core/services/auth.service';
import { CartService } from 'src/app/core/services/cart.service';
import { OrderService } from 'src/app/core/services/order.service';

@Component({
  selector: 'app-place',
  templateUrl: './place.page.html',
  styleUrls: ['./place.page.scss'],
})
export class PlacePage implements OnInit {
  tipo: string = "Pintura";
  order: OrderFoods = new OrderFoods();
  areas: Area[] = [];
  cedulas: any[] = [];
  areaselected:string = "";
  constructor( public router: Router,public toastController:ToastController,public _auth: AuthService,public _orderFood:OrderService,public _cart:CartService) {

  }
  ngOnInit() {
    this._cart.order.usuarioid=this._auth.user._id;
    this._orderFood.areas().subscribe(data => {
      this.areas = data;
    })
  }
  selectArea(id: string) {
    const selected = this.areas.filter((a) => a._id == id);
    this.cedulas = [];
    this.order.cedula = "";
    if (selected.length) {
      this._cart.order.area = selected[0].area;
      this.cedulas = selected[0].cedulas;
    }
  }
  register() {
    console.log(this._cart.order);
    if(this._cart.order.detalles.length || this._cart.order.otrosproductos.length){
    if(this._cart.order.area && this._cart.order.cedula){
      this._orderFood.create(this._cart.order).subscribe(data=>{
        this.presentToast();
        this._cart.order=new OrderFoods();
        this.areaselected="";
      })
    }
  }else{
    this.presentToastError("Seleccione los productos del catalogo si no los encuentra ingrese en otros");
  }

  }
  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Pedido de alimentos enviado.',
      duration: 2500,
      color: 'primary'
    });
    toast.present();
    this.router.navigate(['/user/home']);
  }
  async presentToastError(message:string) {
    const toast = await this.toastController.create({
      message,
      duration: 3000,
      color: 'danger'
    });
    toast.present();
  }


}
