import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CookiesService {

  existeCookies(key:string){
      return Boolean(localStorage.getItem(key));
  }
  getCookies(key:string){
    return localStorage.getItem(key);
  }
  addCookies(key:string,value:any){
    localStorage.setItem(key,JSON.stringify(value));
  }
  removeCookies(key:string){
    localStorage.removeItem(key);
  }
  editCookies(key:string,value:any){
    localStorage.setItem(key,JSON.stringify(value));
  }

}
