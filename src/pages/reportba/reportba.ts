import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';

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
  options: CameraOptions;

  constructor(public navCtrl: NavController, public navParams: NavParams, private camera: Camera) {
    //this.tieneIdChecked = false;
  }

  ngOnInit(){
    this.options = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReportbaPage');
    
  }

  tomarFoto(){
    this.camera.getPicture(this.options)
  }

}
