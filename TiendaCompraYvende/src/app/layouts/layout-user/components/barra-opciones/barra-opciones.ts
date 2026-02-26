import {Component, OnInit, signal} from '@angular/core';
import {Router, RouterLink} from '@angular/router';
import {MeCookiesService} from '../../../../core/services/Cookies/me-cookies.service';
import {CargandoModel} from '../../../../shared/models/cargando-model/cargando-model';
import {NgClass} from '@angular/common';
import {webs} from '../../../../constants/WebsVar';
import {ModelService} from '../../../../core/services/model/model.service';
import {ClickFuera} from '../../../../shared/directives/click-fuera';
@Component({
  selector: 'app-barra-opciones',
  imports: [
    RouterLink,
    CargandoModel,
    NgClass,
    ClickFuera
  ],
  templateUrl: './barra-opciones.html',
  styleUrl: './barra-opciones.scss',
})
export class BarraOpciones implements OnInit {

  estado:any=""

  drop=signal<boolean>(false)
  tipeResp = signal<number>(0)
  barra=signal<boolean>(true)

  constructor(
    private cookie: MeCookiesService,
    private router: Router,
    private model:ModelService,
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
    this.model.show()
    setTimeout(() => {
      this.tipeResp.set(1)

      setTimeout(() => {
        this.model.hide()
        this.router.navigate(['/'])
        this.resRut()
      },900)

    },300)

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
  toggleDrop(){
    this.drop.set(!this.drop());
  }

  cerrarDrop(){
    this.drop.set(false);
  }

  protected readonly Boolean = Boolean;
  protected readonly Number = Number;
}
