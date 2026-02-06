import {Component, signal} from '@angular/core';
import {NgClass} from '@angular/common';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-productos-admin',
  imports: [
    NgClass,
    FormsModule
  ],
  templateUrl: './productos-admin.html',
  styleUrl: './productos-admin.scss',
})
export class ProductosAdmin {
  input=""
  select=""

  Productos=[
    {nombre:"TV",precio:"12.00",categoria:"algo"},
    {nombre:"alallalaa",precio:"12.00",categoria:"ghbaisubva"},
    {nombre:"TV",precio:"12.00",categoria:"algo"},
    {nombre:"TV",precio:"12.00",categoria:"algo"},
    {nombre:"TV",precio:"12.00",categoria:"algo"},
    {nombre:"TV",precio:"12.00",categoria:"algo"},
    {nombre:"TV",precio:"12.00",categoria:"algo"},
    {nombre:"TV",precio:"12.00",categoria:"algo"},
    {nombre:"TV",precio:"12.00",categoria:"algo"},
    {nombre:"TV",precio:"12.00",categoria:"algo"},
    {nombre:"TV",precio:"12.00",categoria:"algo"},
    {nombre:"TV",precio:"12.00",categoria:"algo"},
    {nombre:"TV",precio:"12.00",categoria:"algo"},
    {nombre:"TV",precio:"12.00",categoria:"algo"},
    {nombre:"TV",precio:"12.00",categoria:"algo"},

  ]
  formAddActivo = signal<boolean>(false)
  formModified = signal<boolean>(false)
  Sure = signal<boolean>(false)

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

    return this.input.includes(producto[this.select])
      || this.input===''
      || this.select===''
      || this.input.toLowerCase()===producto[this.select].charAt(0).toString().toLowerCase()

  }
}
