import {Injectable} from '@angular/core';
import {webs} from '../../../constants/WebsVar';
import {MeCookiesService} from '../Cookies/me-cookies.service';
import {BehaviorSubject, Observable} from 'rxjs';

type compra={
  nombre: string,
  info:[number,string,number,string]
}


@Injectable({
  providedIn: 'root',
})
export class CarritoService {
  user = ""

  carrito:BehaviorSubject<[compra[],number]>= new BehaviorSubject<[compra[],number]>([[],0])
  action$:Observable<[compra[],number]> = this.carrito.asObservable();

  carritoActualizado(){
    let carrito:compra[]=this.getCompra()
    let total=carrito.reduce((a,b) => a + (b.info[0]*b.info[2]), 0);
    this.carrito.next([carrito,total])
  }


  constructor(
    private cookie: MeCookiesService
  ) {
    this.user = cookie.get('user');
  }

  key = webs.key

  setCarrito() {
    localStorage.setItem(this.key, JSON.stringify([]));
    this.carritoActualizado()
  }

  addCompra(id:any,nombre: string, precio: number, img: string) {
    let actual = JSON.parse(<string>localStorage.getItem(this.key));

      let resp = actual.some((val: any) =>  val.nombre === id)

      if (!resp || actual.length === 0) {

        actual.push({nombre: id, info: [precio, img, 1,nombre]});

      } else {

        actual = actual.map((val: any) => {
          if (val.nombre === id) {
            val.info[2]++
          }
          return val;
        })

      }


    localStorage.setItem(this.key, JSON.stringify(actual));
    this.carritoActualizado()
  }

  deleteCompra(id:any) {
    let actual:compra[] = JSON.parse(<string>localStorage.getItem(this.key));
    let pro:compra[]=actual.filter((val: any) =>  val.nombre === id)


    if(pro[0].info[2]===1){
      actual=actual.filter((val: any) =>  val.nombre !== id)

    }else{
      actual.map((val: any) => {
        if (val.nombre === id) {
          val.info[2]--
        }
        return val;
      })
    }
    localStorage.setItem(this.key, JSON.stringify(actual));
    this.carritoActualizado()
  }

  getCompra(): [] {
    return JSON.parse(<string>localStorage.getItem(this.key));
  }

  existCompra() {
    return !!localStorage.getItem(this.key);
  }

  delCompra(id:any) {
    let actual:compra[] = JSON.parse(<string>localStorage.getItem(this.key));
    actual=actual.filter((val: any) =>  val.nombre !== id)
    localStorage.setItem(this.key, JSON.stringify(actual));
    this.carritoActualizado()
  }

}
