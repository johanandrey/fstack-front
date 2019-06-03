import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { IngresoPage } from '../ingreso/ingreso';
import { RegistroPage } from '../registro/registro';

/**
 * Generated class for the HomeIndexPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home-index',
  templateUrl: 'home-index.html',
})
export class HomeIndexPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomeIndexPage');
  }

  openIngresoPage(){
    this.navCtrl.setRoot(IngresoPage);
  }

  openRegistroPage(){
    this.navCtrl.setRoot(RegistroPage);
  }

}
