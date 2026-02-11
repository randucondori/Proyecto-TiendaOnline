import {Component, signal} from '@angular/core';
import {RouterLink} from '@angular/router';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {ValidandoEmail} from '../../../../core/validators/email.validator';
import {NgClass} from '@angular/common';
import {PassValid} from '../../../../core/validators/pass.validator';
import {LoginService} from '../../../../core/services/login/login.service';
import {IniciaCon} from '../inicia-con/inicia-con';
import {MeCookiesService} from '../../../../core/services/Cookies/me-cookies.service';

type DatosDeEnvio = { email?: string, password: string }

@Component({
  selector: 'app-auth',
  imports: [
    RouterLink,
    ReactiveFormsModule,
    NgClass,
    IniciaCon,
  ],
  templateUrl: './auth.html',
  styleUrl: './auth.scss',
  standalone: true
})
export class Auth {
  formLogin: FormGroup;

  constructor(
    private formBuild: FormBuilder,
    private loginService: LoginService,
    private cookie:MeCookiesService
  ) {
    this.formLogin = this.formBuild.group({
      email: ['', [Validators.required,ValidandoEmail]],
      password: ['', Validators.required,PassValid(2)]
    })
  }
  ValidarLogin(){

    let data={"email":this.formLogin.value.email,"password":this.formLogin.value.password}

    this.loginService.IsLogin(data).subscribe({
      next: value => {
        console.log(value)
        this.cookie.set("user",value);
        console.log(this.cookie.get("user"));
        console.log("bien")
      },
      error: error => {
        console.log("mal")
      }
    })
  }
}
