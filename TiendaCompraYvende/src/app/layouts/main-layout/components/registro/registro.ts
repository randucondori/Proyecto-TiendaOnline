import {Component, signal} from '@angular/core';
import {Router, RouterLink} from '@angular/router';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {ValidandoEmail} from '../../../../core/validators/email.validator';
import {NgClass} from '@angular/common';
import {PassValid} from '../../../../core/validators/pass.validator';
import {IniciaCon} from '../inicia-con/inicia-con';
import {LoginService} from '../../../../core/services/login/login.service';
import {CargandoModel} from '../../../../shared/models/cargando-model/cargando-model';


@Component({
  selector: 'app-registro',
  imports: [
    RouterLink,
    IniciaCon,
    ReactiveFormsModule,
    NgClass,
    CargandoModel
  ],
  templateUrl: './registro.html',
  styleUrl: './registro.scss',
})
export class Registro {

  formRegister: FormGroup;
  visibleCargando = signal<boolean>(false)
  tipeResp = signal<number>(0)
  errors = signal<any>([])

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private loginService: LoginService,
  ) {
    this.formRegister = this.formBuilder.group({
      nombre: ['', [Validators.required]],
      email: ['', [Validators.required, ValidandoEmail]],
      password: ['', [Validators.required, PassValid]],
      apellidos: ['', [Validators.required]],
      password_confirmation: ['', [Validators.required, PassValid]],
      ciudad: ['', [Validators.required]],
    })
  }

  Registrarse() {

    let form = this.formRegister.value;

    this.visibleCargando.set(true)

    let data = {
      "email": form.email,
      "password": form.password,
      "nombre": form.nombre,
      "apellidos": form.apellidos,
      "password0": form.password_confirmation,
      "ciudad": form.ciudad,
    };

    this.loginService.ToRegister(data).subscribe({
      next: () => {
        this.tipeResp.set(1)
        setTimeout(() => {
          this.router.navigateByUrl('/productosAdmin');
        }, 500)
      },
      error: (error) => {
        this.tipeResp.set(2);
        console.log(error)
        this.errors.set(error.error);
      },
      complete: () => {
        this.visibleCargando.set(false)
      }
    })
  }


}
