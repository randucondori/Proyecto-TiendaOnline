import {Component, OnInit, signal} from '@angular/core';
import {BarraOpciones} from './components/barra-opciones/barra-opciones';
import {RouterOutlet} from '@angular/router';
import {NgClass} from '@angular/common';
import {CarritoService} from '../../core/services/carrito/carrito.service';

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
export class LayoutUser implements OnInit {

  constructor(
    private carritoService: CarritoService,
  ) {}

    barra=signal<boolean>(true)

  toggleBarra(){
      this.barra.set(!this.barra().valueOf());
  }

  ngOnInit(){
      this.carritoService.setCarrito()
  }
}
