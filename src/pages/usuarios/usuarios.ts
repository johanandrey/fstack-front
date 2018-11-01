import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UsuariosServiceProvider } from '../../providers/usuarios-service/usuarios-service';

/**
 * Generated class for the UsuariosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-usuarios',
  templateUrl: 'usuarios.html',
})
export class UsuariosPage {

  listadoUsuarios: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public usp: UsuariosServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UsuariosPage');
  }

  obtenerUsuarios() {

  }

}
