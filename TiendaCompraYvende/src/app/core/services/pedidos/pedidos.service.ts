import { Injectable } from '@angular/core';
import {global} from '../../../../global/global';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PedidosService {
  private URL = global.apiURL;

  constructor(
    private http: HttpClient,
  ) {}

  getPedidos(id: number):Observable<any> {
    return this.http.post<any>(`${this.URL}/logs/pedidos/`,{id_user:id});
  }

}
