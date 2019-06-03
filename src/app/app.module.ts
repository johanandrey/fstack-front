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
import { ReportbaPage } from '../pages/reportba/reportba';
import { FormsModule } from '@angular/forms';

import { Camera } from '@ionic-native/camera';
import { HomeIndexPage } from '../pages/home-index/home-index';
import { IngresoPage } from '../pages/ingreso/ingreso';
import { RegistroPage } from '../pages/registro/registro';
import { RedimirPage } from '../pages/redimir/redimir';
import { LoginServiceProvider } from '../providers/login-service/login-service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    UsuariosPage,
    ReportbaPage,
    HomeIndexPage,
    IngresoPage,
    RegistroPage,
    RedimirPage
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
    ReportbaPage,
    HomeIndexPage,
    IngresoPage,
    RegistroPage,
    RedimirPage
  ],
  providers: [
    StatusBar,
    Camera,
    SplashScreen,
    HttpClient,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UsuariosServiceProvider,
    LoginServiceProvider
  ]
})
export class AppModule {}
