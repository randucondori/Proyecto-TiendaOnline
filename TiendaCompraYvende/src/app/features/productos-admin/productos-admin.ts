import {Component, OnInit, signal} from '@angular/core';
import {NgClass} from '@angular/common';
import {FormControl, FormsModule} from '@angular/forms';
import {ProductosService} from '../../core/services/Productos/productos.service';
import {Router} from '@angular/router';


// Typos o interfaces
type producto = [{ nombre: string, precio: number, categoria_nombre: string }] | []
type categoria = [{ nombre: string, slug: string }] | []


@Component({
  selector: 'app-productos-admin',
  imports: [
    NgClass,
    FormsModule
  ],
  templateUrl: './productos-admin.html',
  styleUrl: './productos-admin.scss',
  standalone: true
})

export class ProductosAdmin implements OnInit {

  constructor(
    private productosService: ProductosService,
    private router:Router
  ) {
  }

  input = ""
  select = ""
  selectCategory=""
  connexionOff = signal<boolean>(false)

  Categorias = signal<categoria>([])
  Productos = signal<producto>([])
  formAddActivo = signal<boolean>(false)
  formModified = signal<boolean>(false)
  Sure = signal<boolean>(false)


  ngOnInit(): void {
    this.productosService.getProductos().subscribe({
      next: data => {
        this.Productos.set(data.productos);
        console.log(data.productos)
      },
      error: error => {
        if (error) {
          this.connexionOff.set(true)
          console.log(error.message)
        }
      },
      complete() {

      }
    })

    this.productosService.getCategorias().subscribe({
      next: data => {
        this.Categorias.set(data.categorias);
      },
      error: error => {
        console.log("error")
      }
    })
  }

  toggleAddForm() {
    this.formAddActivo.update(state => !state)
  }

  toggleModifiedForm() {
    this.formModified.update(state => !state)
  }

  Worry() {
    this.Sure.update(state => !state)
  }

  RemoveProducto(id: string) {

  }

  ValidModified() {

  }

  ProductBorn() {

  }

  BuscarInput(producto: any) {
    if(this.input!==""){

    let nombre=producto.nombre.toLowerCase();
    let separado=""

    for (let i = 0; i < nombre.length; i++) {
      if(i%this.input.length===0){
        separado+=" "
      }
      separado+=nombre[i];
    }

    return separado.includes(this.input.toLowerCase());
    }
    return true;
  }

  BuscarSelect(producto:any){
    return producto.categoria_nombre===this.select
  }

  GoInicio(){
    this.router.navigate(['/']);
  }
}
