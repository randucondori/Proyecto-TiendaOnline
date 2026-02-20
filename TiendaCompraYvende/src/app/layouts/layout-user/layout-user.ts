import {Component, model, OnInit, signal} from '@angular/core';
import {BarraOpciones} from './components/barra-opciones/barra-opciones';
import {RouterOutlet} from '@angular/router';
import {CarritoService} from '../../core/services/carrito/carrito.service';
import {Carrito} from '../../features/carrito/carrito';


@Component({
  selector: 'app-layout-user',
  imports: [
    BarraOpciones,
    RouterOutlet,
    Carrito
  ],
  templateUrl: './layout-user.html',
  styleUrl: './layout-user.scss',
})
export class LayoutUser implements OnInit {

  constructor(
    private carritoService: CarritoService,
  ) {
  }

  // barra=signal<boolean>(false)
  puenteAB = model()
  compras = signal<boolean>(false)

  ngOnInit() {
    if (!this.carritoService.existCompra()) {
      this.carritoService.setCarrito()
    }
  }

  toggleCompras(val: boolean) {
    this.compras.set(val);
    this.carritoService.carritoActualizado()
  }

}
