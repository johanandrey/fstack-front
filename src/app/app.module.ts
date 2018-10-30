import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { UsuariosPage } from '../pages/usuarios/usuarios';
import { UsuariosServiceProvider } from '../providers/usuarios-service/usuarios-service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { ReportbaPage } from '../pages/reportba/reportba';
import { FormsModule } from '@angular/forms';

import { Camera } from '@ionic-native/camera';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    UsuariosPage,
    LoginPage,
    RegisterPage,
    ReportbaPage
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    IonicModule.forRoot(MyApp),
    FormsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    UsuariosPage,
    LoginPage,
    RegisterPage,
    ReportbaPage
  ],
  providers: [
    StatusBar,
    Camera,
    SplashScreen,
    HttpClient,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UsuariosServiceProvider
  ]
})
export class AppModule {}
