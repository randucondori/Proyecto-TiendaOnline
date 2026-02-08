import {Component, OnInit, signal} from '@angular/core';
import {NgClass} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {ProductosService} from '../../core/services/Productos/productos.service';



type producto=[{
  nombre:string,
  precio:number,
  categoria_slug:string
}]| []


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
    private productosService:ProductosService
  ) {}

  input=""
  select=""
  connexionOff=signal<boolean>(false)


  Productos=signal<producto>([])
  formAddActivo = signal<boolean>(false)
  formModified = signal<boolean>(false)
  Sure = signal<boolean>(false)


  ngOnInit(): void {
    this.productosService.getProductos().subscribe({
      next: data => {
        this.Productos.set(data.productos);
      },
      error: error => {
        if(error){
          this.connexionOff.set(true)
          console.log(this.connexionOff())
        }
      },
      complete(){

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

  RemoveProducto(id:string) {

  }

  ValidModified(){

  }
  ProductBorn(){

  }

  Buscar(producto:any){

    console.log(producto[this.select].charAt(0).toString().toLowerCase())

    return this.input.includes(producto[this.select])
      || this.input===''
      || this.select===''
      || this.input.toLowerCase()===producto[this.select].charAt(0).toString().toLowerCase()

  }
}
