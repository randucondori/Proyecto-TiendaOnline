import {Component, input, output, signal} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-cargando-model',
  imports: [
    NgClass,
  ],
  templateUrl: './cargando-model.html',
  styleUrl: './cargando-model.scss',
  standalone:true,
})
export class CargandoModel {
  visible=input<boolean>()
  icono =input<number>(0)
  contenido=input<any>([])


}
