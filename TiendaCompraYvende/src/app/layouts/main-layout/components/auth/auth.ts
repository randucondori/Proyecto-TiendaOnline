import {Component} from '@angular/core';
import {RouterLink} from '@angular/router';
import {FormBuilder, Validators} from '@angular/forms';

type DatosDeEnvio = { email?: string, password: string }

@Component({
  selector: 'app-auth',
  imports: [
    RouterLink
  ],
  templateUrl: './auth.html',
  styleUrl: './auth.scss',
  standalone:true
})
export class Auth {
    constructor(
      private formbuilder: FormBuilder,
    ) {
      this.formbuilder.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', Validators.required],
      })
    }



    prueba(){
      let resp=/^[a-z0-9._]+@[a-z0-9.-]+\.[a-z]{2,}$/i.test("randu@gmail.com")
      console.log(resp)
    }
}
