import {Component, input, output, signal} from '@angular/core';
import {NgClass} from '@angular/common';
import {ModelService} from '../../../core/services/model/model.service';

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

  constructor(
    private modelService: ModelService ,
  ) {
    this.modelService.action$.subscribe(action => {
      this.visible.set(action);
    })
  }

  visible=signal<boolean>(false);
  icono =input<number>()
  contenido=input<boolean>(false)

  cerrarIcono=output<number>()



  cerrar(){
    this.cerrarIcono.emit(0)
  }


}
