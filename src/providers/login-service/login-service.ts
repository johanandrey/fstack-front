import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Credenciales } from '../../pages/ingreso/credenciales';

/*
  Generated class for the LoginServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LoginServiceProvider {

  constructor(public http: HttpClient) {
    console.log('Hello LoginServiceProvider Provider');
  }

  loguearUsuario(credenciales: Credenciales){
    return new Promise((resolve, reject) =>{
      this.http.post("https://fstack-api.herokuapp.com/auth_user", credenciales)
      .subscribe(data => {  
        resolve(data);
       }, error => {
        reject(error);
      });
    })
    
  }

  obtenerDatosUsuario(jwt: string, id:number){        
    return new Promise((resolve, reject) =>{
      this.http.get("https://fstack-api.herokuapp.com/users/"+id, {headers:{'Authorization': 'Bearer '+jwt}})
    .subscribe(data => {
      resolve(data);
     }, error => {
      reject(error);
    });
    });
    

  }

}
