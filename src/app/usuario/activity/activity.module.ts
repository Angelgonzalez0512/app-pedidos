import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ActivityPageRoutingModule } from './activity-routing.module';
import { ActivityPage } from './activity.page';
import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NgSelectModule,
    ActivityPageRoutingModule
  ],
  declarations: [ActivityPage]
})
export class ActivityPageModule {}
