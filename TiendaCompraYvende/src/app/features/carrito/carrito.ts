import {Component, OnInit, output, signal} from '@angular/core';
import {CarritoService} from '../../core/services/carrito/carrito.service';
import {CargandoService} from '../../core/utils/cargando.service';

type compra={
  nombre: string,
  info:[number,string,number,string]
}

@Component({
  selector: 'app-carrito',
  imports: [],
  templateUrl: './carrito.html',
  styleUrl: './carrito.scss',
})
export class Carrito implements OnInit {

  constructor(
    private carritoService: CarritoService,
    private cargandoService: CargandoService
  ) {
  }


  productos = signal<compra[]>([]);
  salir = output<boolean>()
  total =signal<number>(0.00);


  ngOnInit() {
    this.carritoService.action$.subscribe(carrito => {
      this.productos.set(carrito[0]);
      this.total.set(carrito[1]);
    })
  }

  cerrar() {
    this.salir.emit(false)
  }

  eliminarCompra(id: string) {
    this.carritoService.deleteCompra(id)
  }

  LimpiarCompra() {
    if(this.productos().length!==0){
      this.cargandoService.confirmarEliminacion()
    }else{
      this.cargandoService.alert("Limpio","El carrito se encuentra vacio","success")
    }
  }

  eliminarUno(id: string) {
    this.carritoService.delCompra(id)
  }

  addCompra(id:any,nombre: string, precio: number, img: string){
    this.carritoService.addCompra(id, nombre, precio, img);
  }


}
