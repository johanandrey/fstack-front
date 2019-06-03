import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the UsuariosServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UsuariosServiceProvider {

  constructor(public http: HttpClient) {
    console.log('Hello UsuariosServiceProvider Provider');
  }

  obtenerUsuarios() {
    console.log('obtenerUsuario call');
    return this.http.get('https://jsonplaceholder.typicode.com/todos/1')
  }

}
