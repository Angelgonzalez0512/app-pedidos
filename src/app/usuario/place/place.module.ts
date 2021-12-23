import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlacePageRoutingModule } from './place-routing.module';

import { PlacePage } from './place.page';
import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlacePageRoutingModule,
    NgSelectModule
  ],
  declarations: [PlacePage]
})
export class PlacePageModule {}
