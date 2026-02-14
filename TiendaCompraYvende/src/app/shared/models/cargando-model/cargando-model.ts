import {Component, input, model, output} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-cargando-model',
  imports: [
    NgClass,
  ],
  templateUrl: './cargando-model.html',
  styleUrl: './cargando-model.scss',
  standalone:true,
})
export class CargandoModel {
  visible=model<boolean>()
  icono =input<number>()
  contenido=input<string[]>([])

  cerrarVisible=output<boolean>()
  cerrarIcono=output<number>()
  vaciarErrores=output<[]>()


  cerrar(){
    this.cerrarIcono.emit(0)
    this.cerrarVisible.emit(false)
    this.vaciarErrores.emit([])
  }


}
