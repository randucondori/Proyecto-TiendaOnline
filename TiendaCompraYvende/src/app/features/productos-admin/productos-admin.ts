import {Component, signal} from '@angular/core';

@Component({
  selector: 'app-productos-admin',
  imports: [],
  templateUrl: './productos-admin.html',
  styleUrl: './productos-admin.scss',
})
export class ProductosAdmin {


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

}
