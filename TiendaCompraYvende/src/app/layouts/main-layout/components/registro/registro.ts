import {Component, output} from '@angular/core';
import {RouterLink} from '@angular/router';
import {IniciaCon} from '../inicia-con/inicia-con';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-registro',
  imports: [
    RouterLink,
    IniciaCon
  ],
  templateUrl: './registro.html',
  styleUrl: './registro.scss',
})
export class Registro {

  formRegister:FormGroup;

  constructor(
    private formBuilder: FormBuilder,
  ) {
    this.formRegister=this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      apellidos: ['', Validators.required],
      password_confirmation: ['', Validators.required],
    })
  }



}
