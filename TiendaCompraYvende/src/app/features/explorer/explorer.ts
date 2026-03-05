import {Component, OnInit, signal} from '@angular/core';
import {ProductosService} from '../../core/services/Productos/productos.service';
import {NgClass} from '@angular/common';
import {CarritoService} from '../../core/services/carrito/carrito.service';
import {FormsModule} from '@angular/forms';
import {producto} from '../../core/interfaces/carrito';

type categoria ={
  nombre: string,
  slug: string,
}

@Component({
  selector: 'app-explorer',
  imports: [
    NgClass,
    FormsModule
  ],
  templateUrl: './explorer.html',
  styleUrl: './explorer.scss',
  standalone: true,
})
export class Explorer implements OnInit {
  notificaciones = signal<string[]>([])
  search=signal<string>("")
  val=""
  productos = signal<producto>([])
  categorias=signal<categoria[]>([])

  cat=""

  constructor(
    private getproductos: ProductosService,
    private carrito:CarritoService,
  ) {}

  ngOnInit() {
    this.getproductos.getProductos().subscribe({
      next: data => {
        this.productos.set(data.productos)
      },
      error: err => {
        console.log(err)
      }
    })

    this.getproductos.getCategorias().subscribe({
      next: data => {
        this.categorias.set(data.categorias)
      },
      error: err => {

      }
    })
  }

  comprar(id:any,nombre:string,precio:number,img:string) {
    this.notificaciones.update(val => [...val,nombre ]);
    this.carrito.addCompra(id,nombre,precio,img);
    this.carrito.carritoActualizado()
    setTimeout(() => {
      this.notificaciones.update(val=>[...val.slice(0,-1)])
    }, 3000)

  }

  changeCat(nombre: string) {
    if(this.cat===nombre){
      this.cat="";
    }else{
      this.cat=nombre;
    }
  }

  buscar(val:string){
    let reg=RegExp(".*"+this.search(),"i")
    return this.search()===""?true:reg.test(val)
  }

  input(){
    this.search.set(this.val)
  }
}
