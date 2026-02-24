import {Component, output, signal} from '@angular/core';
import {NgClass} from '@angular/common';
import {CarritoService} from '../../core/services/carrito/carrito.service';

@Component({
  selector: 'app-pasarela',
  imports: [
    NgClass
  ],
  templateUrl: './pasarela.html',
  styleUrl: './pasarela.scss',
})
export class Pasarela {
  pre=signal<number>(0)

  constructor(
    private carritoService: CarritoService,
  ) {
    this.carritoService.action$.subscribe(carrito => {
      this.pre.set(carrito[1]);
    })
  }

  salir = output()
  estado = signal<number>(0)


  toggleEstado(i:number) {
    this.estado.set(i)
  }

  envio(){
    return parseFloat((this.pre()*0.07).toFixed(2))
  }

  IVA(){
    return parseFloat((0.17 * this.pre()).toFixed(2))
  }

  total(){
    return parseFloat((this.envio()+this.IVA()+this.pre()).toFixed(2))
  }

}
