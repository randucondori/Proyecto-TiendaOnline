import {Injectable} from '@angular/core';
import {webs} from '../../../constants/WebsVar';
import {MeCookiesService} from '../Cookies/me-cookies.service';

@Injectable({
  providedIn: 'root',
})
export class CarritoService {
  user = ""

  constructor(
    private cookie: MeCookiesService
  ) {
    this.user = cookie.get('user');
  }

  key = webs.key

  setCarrito() {
    localStorage.setItem(this.key, JSON.stringify([]));
  }

  addCompra(nombre: string, precio: number, img: string) {
    let actual = JSON.parse(<string>localStorage.getItem(this.key));
    if (actual.length !== 0) {

      let resp = actual.some((val: any) =>  val.nombre === nombre)

      if (!resp) {

        actual.push({nombre: nombre, info: [precio, img, 0]});

      } else {

        actual = actual.map((val: any) => {
          if (val.nombre === nombre) {
            val.info[2]++
          }
          return val;
        })

      }

    } else {
      actual.push({nombre: nombre, info: [precio, img, 0]});
    }
    localStorage.setItem(this.key, JSON.stringify(actual));
  }

  deleteCompra(compra: object) {
    let actual = JSON.parse(<string>localStorage.getItem(this.key));
    let actualizado = actual.filter((item: { compra: object; }) => item.compra !== compra);
    localStorage.setItem(this.key, JSON.stringify(actualizado));
  }

  getCompra(): [] {
    return JSON.parse(<string>localStorage.getItem(this.key));
  }

  existCompra() {
    return !!localStorage.getItem(this.key);
  }

}
