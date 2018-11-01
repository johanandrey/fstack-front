import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage{

  idUsuario: string;
  puntos: number;

  constructor(public navCtrl: NavController) {

  }

  ionViewDidLoad() {
    this.idUsuario = '1002';
    this.puntos = 700;
  }

  
}
