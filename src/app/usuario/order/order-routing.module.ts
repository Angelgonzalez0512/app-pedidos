import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrderPage } from './order.page';

const routes: Routes = [
  {
    path: '',
    component: OrderPage,
    children:[
      {path:"cart",loadChildren:()=>import("./../cart/cart.module").then(e=>e.CartPageModule)},
      {path:"catalogue",loadChildren:()=>import("./../catalogue/catalogue.module").then(e=>e.CataloguePageModule)},
      {path:"others",loadChildren:()=>import("./../others/others.module").then(e=>e.OthersPageModule)},
      {path:"place",loadChildren:()=>import("./../place/place.module").then(e=>e.PlacePageModule)}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrderPageRoutingModule {}
