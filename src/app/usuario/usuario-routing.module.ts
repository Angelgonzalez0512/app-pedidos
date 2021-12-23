import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuarioComponent } from './usuario.component';

const routes: Routes = [
  {
    path: '',
    component: UsuarioComponent,
    children: [
      {
        path: 'home',
        loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
      },
      {
        path: 'profile',
        loadChildren: () => import('./profile/profile.module').then(m => m.ProfilePageModule)
      },
      {
        path: 'activity',
        loadChildren: () => import('./activity/activity.module').then(m => m.ActivityPageModule)
      },
      {
        path:"cart",
        loadChildren:()=>import('./cart/cart.module').then(e=>e.CartPageModule)
      },
      {
        path:"product",
        loadChildren:()=>import('./product/product.module').then(e=>e.ProductPageModule)
      },
      {
        path:"order",
        loadChildren:()=>import('./order/order.module').then(e=>e.OrderPageModule)
      }
    ]
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  },
  {
    path: 'catalogue',
    loadChildren: () => import('./catalogue/catalogue.module').then( m => m.CataloguePageModule)
  },
  {
    path: 'others',
    loadChildren: () => import('./others/others.module').then( m => m.OthersPageModule)
  },
  {
    path: 'place',
    loadChildren: () => import('./place/place.module').then( m => m.PlacePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuarioRoutingModule { }
