import {Component, signal} from '@angular/core';
import {Router, RouterLink} from '@angular/router';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {ValidandoEmail} from '../../../../core/validators/email.validator';
import {NgClass} from '@angular/common';
import {PassValid} from '../../../../core/validators/pass.validator';
import {LoginService} from '../../../../core/services/login/login.service';
import {IniciaCon} from '../inicia-con/inicia-con';
import {MeCookiesService} from '../../../../core/services/Cookies/me-cookies.service';
import {CargandoModel} from '../../../../shared/models/cargando-model/cargando-model';
import {webs} from '../../../../constants/WebsVar';
import {ModelService} from '../../../../core/services/model/model.service';

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
  passlen = 2

  constructor(
    private formBuild: FormBuilder,
    private loginService: LoginService,
    private cookie: MeCookiesService,
    private router: Router,
    private model: ModelService,
  ) {
    this.formLogin = this.formBuild.group({
      email: ['', [Validators.required, ValidandoEmail]],
      password: ['', [Validators.required, PassValid(this.passlen)]]
    })
  }

  tipeResp = signal<number>(0)
  errors = signal<string[]>([])


  ValidarLogin() {

    let data = {
      "email": this.formLogin.value.email,
      "password": this.formLogin.value.password
    }

    this.model.show()
    this.errors.set([])

    this.loginService.IsLogin(data).subscribe({
      next: value => {
        this.tipeResp.set(1)
        this.cookie.set(webs.token, JSON.stringify(value));
        setTimeout(() => {
          this.model.hide();
          this.router.navigateByUrl('/sesion/inicio');
        }, 800)
      },
      error: error => {
        this.tipeResp.set(2);
        this.errors.set(error.error.error);
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
