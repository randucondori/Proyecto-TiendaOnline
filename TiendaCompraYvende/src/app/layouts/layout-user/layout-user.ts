import { Component } from '@angular/core';
import {BarraOpciones} from './components/barra-opciones/barra-opciones';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-layout-user',
  imports: [
    BarraOpciones,
    RouterOutlet
  ],
  templateUrl: './layout-user.html',
  styleUrl: './layout-user.scss',
})
export class LayoutUser {

}
