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


type ciudad={"nombre":string,"slug":string}

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

  visibleCargando = signal<boolean>(false)
  tipeResp = signal<number>(0)
  errors = signal<string[]>([])

  ciudades=signal<ciudad[]>([])


  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private loginService: LoginService,
    private ciudadesService: CiudadesService,
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
    this.visibleCargando.set(true)
    this.loginService.ToRegister(data).subscribe({
      next: () => {
        this.tipeResp.set(1)
        setTimeout(()=>{

        },2000)
        console.log(this.errors().values(),this.tipeResp().valueOf(),this.visibleCargando().valueOf())

        setTimeout(() => {
          this.visibleCargando.set(false)
          // this.router.navigateByUrl('/productosAdmin');
        }, 2000)
      },
      error: (error) => {
        this.tipeResp.set(2);
        this.errors.set(error.error.errors);
        console.log(this.errors().valueOf())
      },
      complete: () => {
      }
    })
  }

  changeCargando(o: boolean) {
    this.visibleCargando.set(o)
  }

  changeIcono(n: number): void {
    this.tipeResp.set(n)
  }

  protected readonly Boolean = Boolean;
  protected readonly Number = Number;
}
