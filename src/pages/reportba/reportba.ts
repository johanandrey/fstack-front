import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ReportbaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-reportba',
  templateUrl: 'reportba.html',
})
export class ReportbaPage implements OnInit{
  tieneIdChecked : boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.tieneIdChecked = false;
  }

  ngOnInit(){
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReportbaPage');
    
  }

}
