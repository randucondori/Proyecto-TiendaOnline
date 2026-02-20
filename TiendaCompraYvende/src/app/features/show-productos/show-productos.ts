import {Component, OnInit, signal} from '@angular/core';
import {ProductosService} from '../../core/services/Productos/productos.service';

type producto=[{nombre:string,
  precio:number,
  categoria_nombre:string,
  slug:string,
  img:string,
}]|[];

@Component({
  selector: 'app-show-productos',
  imports: [
  ],
  templateUrl: './show-productos.html',
  styleUrl: './show-productos.scss',
})
export class ShowProductos implements OnInit {
  constructor(
    private productosService: ProductosService
  ) {}

  Productos=signal<producto>([])



  ngOnInit() {
    this.productosService.getProductos().subscribe({
      next: data => {
        this.Productos.set(data.productos)
      },
      error: error =>{

      }
    })
  }
}
