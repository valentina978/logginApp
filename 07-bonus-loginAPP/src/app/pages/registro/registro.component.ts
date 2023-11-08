import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from 'src/app/models/usuario.model';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  usuario: UsuarioModel = new UsuarioModel();


  constructor(private auth:AuthService) { }

  ngOnInit() {
    this.usuario = new UsuarioModel();
    /* this.usuario.email = 'fernando.herrera85@gmail.com'; */
  }

  onSubmit( form: NgForm){

    if( form.invalid){return}


    this.auth.nuevoUsuario( this.usuario)
    .subscribe( resp=>{
      console.log(resp);

    });

/* 
    console.log('Formulario enviado');
    console.log(this.usuario)
    console.log(form) */
  }

}