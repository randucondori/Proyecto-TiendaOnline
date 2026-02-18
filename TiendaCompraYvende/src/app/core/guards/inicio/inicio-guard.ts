import {CanActivateFn, Router} from '@angular/router';
import {inject} from '@angular/core';
import {MeCookiesService} from '../../services/Cookies/me-cookies.service';
import {webs} from '../../../constants/WebsVar';

export const inicioGuard: CanActivateFn = (route, state) => {

  let cookie=inject(MeCookiesService)
  const rout=inject(Router)


  if(!cookie.exists(webs.token)){
    return true
  }else{
    rout.navigate(['/sesion/inicio']);
    return false;
  }
};
