import { Injectable } from '@angular/core';
import{HttpClient}from '@angular/common/http'
import { UsuarioModel } from '../models/usuario.model';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty';
  private apikey = 'AIzaSyCj61t5NunynZ2URVmdT1QnL77U0NKyj8c  ';

  /* userToken: string; */

  //Crear nuevo usuario
  //https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]


  //Login
  //https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]

  constructor( private http:HttpClient) {
    /* this.leerToken(); */
  }

  logout(){

  }
  login(usuario:UsuarioModel){

  }

  nuevoUsuario(usuario: UsuarioModel) {
    const authData = {
      ...usuario,
      returnSecureToken: true
    };

    return this.http.post(
     `${this.url}/signupNewUser?key=${this.apikey}`,
     authData
    );

  }
}
