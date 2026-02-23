import {Component, output, signal} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-pasarela',
  imports: [
    NgClass
  ],
  templateUrl: './pasarela.html',
  styleUrl: './pasarela.scss',
})
export class Pasarela {

  salir = output()
  estado = signal<number>(0)


  toggleEstado(i:number) {
    this.estado.set(i)
  }
}
