import {Component, Injectable, signal} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-cargando-model',
  imports: [
    NgClass
  ],
  templateUrl: './cargando-model.html',
  styleUrl: './cargando-model.scss',
  standalone:true,
})
@Injectable({
  providedIn: 'any',
})
export class CargandoModel {
  contenido=signal<string>("Conectando")
  visible=signal<boolean>(false)
  titulo=signal<string>("Cargando")

  SetTitulo(titulo:string){
    this.titulo.set(titulo);
  }
  Invisible(){
    this.visible=signal<boolean>(false)
  }
  Visible(){
    this.visible=signal<boolean>(true)
  }
  setContenido(contenido:string){
    this.contenido.set(contenido);
  }

  async cargando(){
    this.Visible();
  }
  completado(){
    this.Invisible();
  }


}
