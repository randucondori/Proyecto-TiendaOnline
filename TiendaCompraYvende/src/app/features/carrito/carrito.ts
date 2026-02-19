import {Component, OnInit, output, signal} from '@angular/core';
import {CarritoService} from '../../core/services/carrito/carrito.service';

type compra={
  nombre: string,
  info:[number,string,number]
}

@Component({
  selector: 'app-carrito',
  imports: [],
  templateUrl: './carrito.html',
  styleUrl: './carrito.scss',
})
export class Carrito {

  constructor(
    private carritoService: CarritoService
  ) {}

  total=0.00
  productos=signal<compra[]>([]);
  salir=output<boolean>()

  cerrar(){
    this.salir.emit(false)
  }

  eliminarCompra(p:object){
    this.carritoService.deleteCompra(p)
  }

}
