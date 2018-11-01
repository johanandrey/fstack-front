import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit{

  idUsuario: string;

  ngOnInit() {
    this.idUsuario = '1002';
  }

  constructor(public navCtrl: NavController) {

  }

  
}
