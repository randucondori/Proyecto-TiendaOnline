import { Component } from '@angular/core';
import {Router, RouterLink} from '@angular/router';
import {MeCookiesService} from '../../../../core/services/Cookies/me-cookies.service';

@Component({
  selector: 'app-barra-opciones',
  imports: [
    RouterLink
  ],
  templateUrl: './barra-opciones.html',
  styleUrl: './barra-opciones.scss',
})
export class BarraOpciones {

  constructor(
    private cookie: MeCookiesService,
    private router: Router
  ) {}


  cerrarSesion(): void {
    this.cookie.remove('user')
    this.router.navigate(['/']);
  }

}
