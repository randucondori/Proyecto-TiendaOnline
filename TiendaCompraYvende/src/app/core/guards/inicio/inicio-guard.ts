import {CanActivateFn, Router} from '@angular/router';
import {inject} from '@angular/core';
import {MeCookiesService} from '../../services/Cookies/me-cookies.service';

export const inicioGuard: CanActivateFn = (route, state) => {

  let cookie=inject(MeCookiesService)
  const rout=inject(Router)


  if(!cookie.exists('user')){
    return true
  }else{
    rout.navigate(['/sesion/inicio']);
    return false;
  }
};
