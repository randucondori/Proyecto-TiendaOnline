import {Component, OnInit, signal} from '@angular/core';
import {ProductosService} from '../../core/services/Productos/productos.service';
import {Observable} from 'rxjs';

type producto = [{
  nombre: string,
  precio: number,
  categoria_nombre: string,
  slug: string,
  img: string,
}] | [];

@Component({
  selector: 'app-explorer',
  imports: [],
  templateUrl: './explorer.html',
  styleUrl: './explorer.scss',
})
export class Explorer implements OnInit {

  notificaciones = signal<string[]>([])
  productos = signal<producto>([])

  constructor(private getproductos: ProductosService) {
  }

  ngOnInit() {
    this.getproductos.getProductos().subscribe({
      next: data => {
        this.productos.set(data.productos)
      },
      error: err => {

      }
    })
  }

  comprar(nombre: string) {
    this.notificaciones.update(val => [...val, nombre]);

    setTimeout(() => {
      this.notificaciones.update(val=>[...val.slice(0,-1)])
      console.log(this.notificaciones())
      console.log("eliminado")
    }, 2000)

  }

}
