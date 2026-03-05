import { Injectable } from '@angular/core';
import {global} from '../../../../global/global';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {MeCookiesService} from '../Cookies/me-cookies.service';
import {webs} from '../../../constants/WebsVar';
import {CarritoService} from '../carrito/carrito.service';
import {compra} from '../../interfaces/carrito';

@Injectable({
  providedIn: 'root',
})
export class PedidosService {
  private URL = global.apiURL;
  id=""

  constructor(
    private carritoService: CarritoService,
    private mecookiesService: MeCookiesService,
    private http: HttpClient,
  ) {
    this.id=JSON.parse(this.mecookiesService.get(webs.token)).data.id;
  }

  getPedidos():Observable<any> {
    return this.http.post<any>(`${this.URL}/logs/getpedido/`,{id_user:this.id});
  }

  commitPedido(){
    let cookie:compra[]=this.carritoService.getCompra()
    let user=JSON.parse(this.mecookiesService.get(webs.token)).data.id;
    let pedido=cookie.map((ele)=>{return [ele.nombre,ele.info[2]]})

    return {usuario_id:user,pedido:pedido};
  }

  enviarPedidos(carrito:any):Observable<any> {
    return this.http.post(`${this.URL}/logs/pedidos/`, carrito);
  }

}
