import { Injectable } from '@angular/core';
import {global} from '../../../../global/global';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {MeCookiesService} from '../Cookies/me-cookies.service';
import {webs} from '../../../constants/WebsVar';

@Injectable({
  providedIn: 'root',
})
export class PedidosService {
  private URL = global.apiURL;
  id=""

  constructor(
    private MecookieService:MeCookiesService,
    private http: HttpClient,
  ) {
    this.id=JSON.parse(this.MecookieService.get(webs.token)).data.id;
  }

  getPedidos():Observable<any> {
    return this.http.post<any>(`${this.URL}/logs/getpedido/`,{id_user:this.id});
  }

}
