import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit{

  idUsuario: string;

  ngOnInit() {
    this.idUsuario = '3155000000';
  }

  constructor(public navCtrl: NavController) {

  }

  
}
