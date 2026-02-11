import {Component, signal} from '@angular/core';
import {RouterLink} from '@angular/router';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {ValidandoEmail} from '../../../../core/validators/email.validator';
import {NgClass} from '@angular/common';
import {PassValid} from '../../../../core/validators/pass.validator';
import {LoginService} from '../../../../core/services/login/login.service';

type DatosDeEnvio = { email?: string, password: string }

@Component({
  selector: 'app-auth',
  imports: [
    RouterLink,
    ReactiveFormsModule,
    NgClass,
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
  ) {
    this.formLogin = this.formBuild.group({
      email: ['', [Validators.required,ValidandoEmail]],
      password: ['', Validators.required,PassValid(2)]
    })
  }
  ValidarLogin(){
    console.log(this.formLogin.value);
    this.loginService.IsLogin(this.formLogin.value).subscribe({
      next: value => {
        console.log("bien")
      },
      error: error => {
        console.log("mal")
      }
    })
  }

  prueba() {
    let resp=/^[a-z0-9._]+@[a-z0-9.-]+\.(com|es)$/i.test("randu@gmail.com")
    console.log(resp)
  }
}
