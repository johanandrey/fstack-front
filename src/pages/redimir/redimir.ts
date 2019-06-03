import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NegocioInfo } from './negocio-info';

/**
 * Generated class for the RedimirPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-redimir',
  templateUrl: 'redimir.html',
})
export class RedimirPage {

  negociosAfiliados: NegocioInfo[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RedimirPage');
    this.negociosAfiliados = [
      {foto:'john-smith-café.png', puntos: 350},
      {foto:'tullave.png', puntos: 400},
      {foto:'rocorico.png', puntos: 600}
    ];
  }

}
