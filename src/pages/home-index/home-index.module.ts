import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomeIndexPage } from './home-index';

@NgModule({
  declarations: [
    HomeIndexPage,
  ],
  imports: [
    IonicPageModule.forChild(HomeIndexPage),
  ],
})
export class HomeIndexPageModule {}
