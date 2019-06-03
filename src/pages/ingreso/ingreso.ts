import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { LoginServiceProvider } from '../../providers/login-service/login-service';
import { Credenciales } from './credenciales';
import { HomePage } from '../home/home';

/**
 * Generated class for the IngresoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ingreso',
  templateUrl: 'ingreso.html',
})
export class IngresoPage {
  email: string;
  password: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private loginService: LoginServiceProvider, public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IngresoPage');
  }

  openHome(){
    let cred : Credenciales;
    cred = {
      email: this.email,
      password:this.password
    };

    this.loginService.loguearUsuario(cred).then(res =>{
      let jwt = res['auth_token'];
      let user = res['user'];
      let id = user['id'];
      
      this.loginService.obtenerDatosUsuario(jwt, id).then(resp =>{
        console.log(resp);
        this.navCtrl.setRoot(HomePage, {id: resp['id'], puntos: resp['available_score'], nombre:resp['name']});
      })

    }).catch(error =>{
      console.log('entré al catch',error);
      this.mostrarMensajeError();
    });;
    
    
  }

  mostrarMensajeError(){
    const toast = this.toastCtrl.create({
      message: 'Las credenciales ingresadas son incorrectas',
      duration: 5000,
      position: 'middle',
      showCloseButton: true
    });
    toast.present();
  }

}
