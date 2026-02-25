import {Component, OnInit, signal} from '@angular/core';
import {Router, RouterLink} from '@angular/router';
import {MeCookiesService} from '../../../../core/services/Cookies/me-cookies.service';
import {CargandoModel} from '../../../../shared/models/cargando-model/cargando-model';
import {NgClass} from '@angular/common';
import {webs} from '../../../../constants/WebsVar';

@Component({
  selector: 'app-barra-opciones',
  imports: [
    RouterLink,
    CargandoModel,
    NgClass
  ],
  templateUrl: './barra-opciones.html',
  styleUrl: './barra-opciones.scss',
})
export class BarraOpciones implements OnInit {

  estado:any=""

  visibleCargando = signal<boolean>(false)
  tipeResp = signal<number>(0)
  barra=signal<boolean>(true)

  constructor(
    private cookie: MeCookiesService,
    private router: Router
  ) {}

  ngOnInit() {
    let log=this.getRut()
    this.estado=this.getRut()?log?.split("/")[2]:'inicio'
  }



  cambiarEstado(estado:string){
    this.estado=estado;
    this.putRut()
  }

  cerrarSesion(): void {
    this.cookie.remove(webs.token)
    this.visibleCargando.set(true)
    setTimeout(() => {
      this.tipeResp.set(1)

      setTimeout(() => {
        this.visibleCargando.set(false)
        this.router.navigate(['/'])
        this.resRut()
      },900)

    },300)

  }

  changeCargando(o: boolean) {
    this.visibleCargando.set(o)
  }

  changeIcono(n: number): void {
    this.tipeResp.set(n)
  }

  toggleBarra(){
    this.barra.set(!this.barra().valueOf());
  }

  getRut(){
    return sessionStorage.getItem('rut');
  }
  putRut(){
    sessionStorage.setItem('rut', "/sesion/"+this.estado);
  }
  resRut(){
    sessionStorage.setItem('rut',"/sesion/inicio");
  }


  protected readonly Boolean = Boolean;
  protected readonly Number = Number;
}
