import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { IonicSelectableComponent } from 'ionic-selectable';
import { Activity } from 'src/app/core/models/activity';
import { Area } from 'src/app/core/models/area';
import { ActivityService } from 'src/app/core/services/activity.service';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.page.html',
  styleUrls: ['./activity.page.scss'],
})

export class ActivityPage implements OnInit {
  tipo: string = "Pintura";
  activityselected: string = "";
  activity: Activity = new Activity();
  areas: Area[] = [];
  cedulas: any[] = [];
  constructor(public rutaactiva: ActivatedRoute, public router: Router, public _activity: ActivityService,public toastController:ToastController,public _auth: AuthService) {

  }
  ngOnInit() {
    this.rutaactiva.paramMap.subscribe(data => {
      if (data.get("tipo") == "1") {
        this.tipo = "Pintura";
        this.activity.nombre = "Pintura";
      } else {
        this.tipo = "Reparacion";
        this.activity.nombre = "Reparacion";
      }
    })
    this.activity.usuarioid=this._auth.user._id;
    this._activity.areas().subscribe(data => {
      this.areas = data;
    })
  }
  selectArea(id: string) {
    const selected = this.areas.filter((a) => a._id == id);
    this.cedulas = [];
    this.activity.cedula = "";
    if (selected.length) {
      this.activity.area = selected[0].area;
      this.cedulas = selected[0].cedulas;
    }
  }
  register() {
    console.log(this.activity);
    if(this.activity.area && this.activity.cedula){
      this._activity.create(this.activity).subscribe(data=>{
        this.presentToast();
      })
    }

  }
  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Pedido de actividad enviado.',
      duration: 2000,
      color: 'primary'
    });
    toast.present();
    this.router.navigate(['/user/home']);
  }


}
