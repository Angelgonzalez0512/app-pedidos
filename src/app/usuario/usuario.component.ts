import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import Config from '../core/models/config';
import { AuthService } from '../core/services/auth.service';
import { StorageService } from '../core/services/storage.service';
import { UserService } from '../core/services/user.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss'],
})
export class UsuarioComponent implements OnInit {
  loading: boolean = true;
  constructor(public loadingController: LoadingController, public _user: UserService, public _auth: AuthService, public _storage: StorageService, public router: Router) {

  }
  ngOnInit() {
    if (!this._auth.user?._id) {
        (async () => {
          if (!this._storage.__init__) {
          const init = await this._storage.init();
          }
          const response = await this._storage.getItem("user_auth");
          if (response) {
            const { jwt, id } = JSON.parse(response);
            Config.tokenUser = jwt;
            this._user.tokenUser=jwt;
            this._user.detail(id).subscribe(data => {
              if(data){
              this._auth.user = data;
              
              if (!data.hasOwnProperty("success")) {
                if (data.estado == "activo") {
                  this.loading=false;
                } else {
                  (async()=>{
                    const response = await this._storage.delete("user_auth");
                    this.router.navigate(["/"]);
                  })()
                }
              } else {
                (async()=>{
                  const response = await this._storage.delete("user_auth");
                  this.router.navigate(["/"]);
                })()
              }
            }else{
              (async()=>{
                const response = await this._storage.delete("user_auth");
                this.router.navigate(["/"]);
              })()
            }
            },erro=>{
              (async()=>{
                const response = await this._storage.delete("user_auth");
                this.router.navigate(["/"]);
              })()
            })
          } else {
            (async()=>{
              const response = await this._storage.delete("user_auth");
              this.router.navigate(["/"]);
            })()
          }
        })()
     
    } else {
      this.loading = false;
    }

  }
}