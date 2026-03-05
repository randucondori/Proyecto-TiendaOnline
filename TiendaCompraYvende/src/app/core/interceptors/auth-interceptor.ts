import { HttpInterceptorFn } from '@angular/common/http';
import {inject} from '@angular/core';
import {MeCookiesService} from '../services/Cookies/me-cookies.service';
import {webs} from '../../constants/WebsVar';

export const authInterceptor: HttpInterceptorFn = (req, next) => {

  const cookieService = inject(MeCookiesService);
  const token = cookieService.get(webs.token)

  req = req.clone({
    setHeaders: {
      "Authorization": (token) ? `Bearer ${token}` : "",
      'Accept': 'application/json',
    }
  })
  return next(req);
};
