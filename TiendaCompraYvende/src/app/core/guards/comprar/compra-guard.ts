import {CanActivateFn, Router} from '@angular/router';
import {MeCookiesService} from '../../services/Cookies/me-cookies.service';
import {inject} from '@angular/core';
import {webs} from '../../../constants/WebsVar';

export const compraGuard: CanActivateFn = (route, state) => {

  const cookie=inject(MeCookiesService)
  const router=inject(Router);

  if(cookie.exists(webs.token)){
    return true
  }else{
    router.navigate(['/'])
    return false
  }

};
