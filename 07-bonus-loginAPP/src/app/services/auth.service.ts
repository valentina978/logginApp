import { Injectable } from '@angular/core';
import{HttpClient}from '@angular/common/http'
import { UsuarioModel } from '../models/usuario.model';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url='https://identitytoolkit.googleapis.com/v1/accounts:'
  private apikey='AIzaSyCj61t5NunynZ2URVmdT1QnL77U0NKyj8c'
//crear nuevo usuario
//https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]
//login
//https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]
  constructor(private http:HttpClient) { }

  logout(){

  }
  login(usuario:UsuarioModel){

  }

  nuevousuario(usuario:UsuarioModel){

  }
}
