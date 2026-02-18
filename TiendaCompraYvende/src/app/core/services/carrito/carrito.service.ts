import { Injectable } from '@angular/core';
import {webs} from '../../../constants/WebsVar';
import {MeCookiesService} from '../Cookies/me-cookies.service';

@Injectable({
  providedIn: 'root',
})
export class CarritoService {

  constructor(
    private cookie:MeCookiesService
  ) {
    this.user=cookie.get('user');
  }
  user=""
  key=webs.key

  setCarrito(){
    localStorage.setItem(this.key,JSON.stringify([]));
  }

  addCompra(compra:object){
    let actual=JSON.parse(<string>localStorage.getItem(this.key));
    actual.push(compra);
    localStorage.setItem(this.key,JSON.stringify(actual));
  }

  deleteCompra(compra:object){
    let actual=JSON.parse(<string>localStorage.getItem(this.key));
    let actualizado=actual.filter((item: { compra: object; }) => item.compra !== compra);
    localStorage.setItem(this.key,JSON.stringify(actualizado));
  }

}
