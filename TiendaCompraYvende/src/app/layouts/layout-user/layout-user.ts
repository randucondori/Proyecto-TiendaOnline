import {Component, signal} from '@angular/core';
import {BarraOpciones} from './components/barra-opciones/barra-opciones';
import {RouterOutlet} from '@angular/router';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-layout-user',
  imports: [
    BarraOpciones,
    RouterOutlet,
    NgClass
  ],
  templateUrl: './layout-user.html',
  styleUrl: './layout-user.scss',
})
export class LayoutUser {
    barra=signal<boolean>(false)

  toggleBarra(){
      this.barra.set(!this.barra().valueOf());
  }
}
