import {Component} from '@angular/core';
import {RouterLink} from '@angular/router';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {ValidandoEmail} from '../../../../core/validators/email.validator';
import {NgClass} from '@angular/common';
import {PassValid} from '../../../../core/validators/pass.validator';
import {IniciaCon} from '../inicia-con/inicia-con';


@Component({
  selector: 'app-registro',
  imports: [
    RouterLink,
    IniciaCon,
    ReactiveFormsModule,
    NgClass
  ],
  templateUrl: './registro.html',
  styleUrl: './registro.scss',
})
export class Registro {

  formRegister:FormGroup;

  constructor(
    private formBuilder: FormBuilder,
  ) {
    this.formRegister= this.formBuilder.group({
      nombre:['', [Validators.required]],
      email: ['', [Validators.required,ValidandoEmail]],
      password: ['', [Validators.required,PassValid]],
      apellidos: ['', [Validators.required]],
      password_confirmation: ['', [Validators.required,PassValid]],
      ciudad: ['', [Validators.required]],
    })
  }




}
