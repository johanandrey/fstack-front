import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage{

  idUsuario: string;
  puntos: number;
  nombre: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log('Esto me trajo:', navParams.get('id'));
    console.log('Esto me trajo:', navParams.get('puntos'));
    
    this.idUsuario = navParams.get('id');
    this.puntos = navParams.get('puntos');
    this.nombre = navParams.get('nombre');
  }

  ionViewDidLoad() {
  }

  
}
