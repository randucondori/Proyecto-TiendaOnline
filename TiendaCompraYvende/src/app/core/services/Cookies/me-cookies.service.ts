import { Injectable } from '@angular/core';
import {CookieService} from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class MeCookiesService {
  constructor(
    private CookiesService: CookieService,
  ) {}


  set(key: string, value: string, days: number = 5) {
    this.CookiesService.set(
      key,
      value,
      days,
      "/", // Todas las páginas de mi web pueden acceder a esta cookie
      undefined,
      false, // ¿Solo permitimos HTTPS?
      "Strict"
    );
  }

  // obtener cookie
  get(key: string) {
    return this.CookiesService.get(key) // Solo retorna el VALUE
  }

  // borrar cookie
  remove(key: string) {
    if(this.exists(key)){
      console.log(21)
      this.CookiesService.delete(key, "/")
    }
  }

  // Comprobar que existe cookie
  exists(key: string): boolean {
    return this.CookiesService.check(key)
  }

  //Borrar todas las cookies
  removeAll(): void {
    this.CookiesService.deleteAll();
  }
}
