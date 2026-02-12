import {Component, output, signal} from '@angular/core';
import {Router, RouterLink} from '@angular/router';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {ValidandoEmail} from '../../../../core/validators/email.validator';
import {NgClass} from '@angular/common';
import {PassValid} from '../../../../core/validators/pass.validator';
import {LoginService} from '../../../../core/services/login/login.service';
import {IniciaCon} from '../inicia-con/inicia-con';
import {MeCookiesService} from '../../../../core/services/Cookies/me-cookies.service';
import {CargandoModel} from '../../../../shared/models/cargando-model/cargando-model';


type DatosDeEnvio = { email?: string, password: string }

@Component({
  selector: 'app-auth',
  imports: [
    RouterLink,
    ReactiveFormsModule,
    NgClass,
    IniciaCon,
    CargandoModel,
  ],
  templateUrl: './auth.html',
  styleUrl: './auth.scss',
  standalone: true
})
export class Auth {

  formLogin: FormGroup;
  passlen=2

  constructor(
    private formBuild: FormBuilder,
    private loginService: LoginService,
    private cookie:MeCookiesService,
    private router: Router,
  ) {
    this.formLogin = this.formBuild.group({
      email: ['', [Validators.required,ValidandoEmail]],
      password: ['', Validators.required,PassValid(this.passlen)]
    })
  }

  visibleCargando=signal<boolean>(false)
  tipeResp=signal<number>(0)
  errors=signal<any>([])

  
  ValidarLogin(){
    let data={"email":this.formLogin.value.email,"password":this.formLogin.value.password}

    this.visibleCargando.set(true)

    this.loginService.IsLogin(data).subscribe({
      next: value => {
        this.tipeResp.set(1)
        this.cookie.set("user",value);
        setTimeout(()=>{
          this.router.navigateByUrl('/productosAdmin');
        },500)
      },
      error: error => {
        this.tipeResp.set(2);
        console.log(error)
        this.errors.set(error.error);

      },
      complete: () => {
        setTimeout(()=> {
          this.visibleCargando.set(false)
          this.tipeResp.set(0)
        },5000)
      }
    })
  }
}
