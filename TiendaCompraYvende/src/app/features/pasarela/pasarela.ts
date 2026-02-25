import {Component, output, signal} from '@angular/core';
import {NgClass} from '@angular/common';
import {CarritoService} from '../../core/services/carrito/carrito.service';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {PassValid} from '../../core/validators/pass.validator';
import {TelValidator} from '../../core/validators/tel.validator';

@Component({
  selector: 'app-pasarela',
  imports: [
    NgClass,
    ReactiveFormsModule
  ],
  templateUrl: './pasarela.html',
  styleUrl: './pasarela.scss',
  standalone:true,
})
export class Pasarela {
  pre=signal<number>(0)
  pagoFrom:FormGroup;

  constructor(
    private carritoService: CarritoService,
    private formBuilder: FormBuilder,
  ) {

    this.carritoService.action$.subscribe(carrito => {
      this.pre.set(carrito[1]);
    })

    this.pagoFrom=this.formBuilder.group({
      direccion: ['', [Validators.required, PassValid()]],
      telefono: ['',[Validators.required,TelValidator()]],
    })

  }

  salir = output()
  estado = signal<number>(0)


  toggleEstado(i:number) {
    this.estado.set(i)
  }

  envio(){
    return parseFloat((this.pre()*0.07).toFixed(2))
  }

  IVA(){
    return parseFloat((0.17 * this.pre()).toFixed(2))
  }

  total(){
    return parseFloat((this.envio()+this.IVA()+this.pre()).toFixed(2))
  }

  protected readonly JSON = JSON;
}
