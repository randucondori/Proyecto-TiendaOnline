import {Component, OnInit, signal} from '@angular/core';
import {Router, RouterLink} from '@angular/router';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {ValidandoEmail} from '../../../../core/validators/email.validator';
import {NgClass} from '@angular/common';
import {PassValid} from '../../../../core/validators/pass.validator';
import {IniciaCon} from '../inicia-con/inicia-con';
import {LoginService} from '../../../../core/services/login/login.service';
import {CargandoModel} from '../../../../shared/models/cargando-model/cargando-model';
import {CiudadesService} from '../../../../core/services/ciudades/ciudades.service';
import {ciudad} from '../../../../core/interfaces/user';
import {ModelService} from '../../../../core/services/model/model.service';


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
export class Registro implements OnInit {

  formRegister: FormGroup;

  tipeResp = signal<number>(0)
  errors = signal<string[]>([])

  ciudades=signal<ciudad[]>([])


  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private loginService: LoginService,
    private ciudadesService: CiudadesService,
    private model:ModelService,
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

  ngOnInit(): void {
    this.ciudadesService.getCiudades().subscribe({
      next: data => {
        this.ciudades.set(data.ciudades);
      },
      error: error => {
        this.ciudades.set([{"nombre":"Madrid","slug":"madrid"}],)
      }
    })
  }

  Registrarse() {

    let form = this.formRegister.value;

    let data = {
      "email": form.email,
      "password": form.password,
      "nombre": form.nombre,
      "apellidos": form.apellidos,
      "password0": form.password_confirmation,
      "ciudad": form.ciudad,
    };
    this.model.show()
    this.errors.set([])

    this.loginService.ToRegister(data).subscribe({
      next: () => {
        this.tipeResp.set(1)
        setTimeout(()=>{

        },2000)
        setTimeout(() => {
          this.model.hide()
          this.router.navigateByUrl('/sesion');
        }, 2000)
      },
      error: (error) => {
        this.tipeResp.set(2);
        this.errors.set(error.error.errors);
      },
      complete: () => {
      }
    })
  }

  changeIcono(n: number): void {
    this.tipeResp.set(n)
  }

  protected readonly Boolean = Boolean;
  protected readonly Number = Number;
}
