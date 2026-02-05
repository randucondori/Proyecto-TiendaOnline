import {Component, signal} from '@angular/core';
import {Auth} from '../auth/auth';

@Component({
  selector: 'app-head-main',
  imports: [
    Auth
  ],
  templateUrl: './head-main.html',
  styleUrl: './head-main.scss',
  standalone: true
})
export class HeadMain {
  cambiaLogin  = signal<boolean>(false)


  IniciarSesion(){
    this.cambiaLogin.update(state=>!state);
  }
}
