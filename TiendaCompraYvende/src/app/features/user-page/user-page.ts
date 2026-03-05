import {Component, OnInit, signal} from '@angular/core';
import {PedidosUser} from './components/pedidos-user/pedidos-user';
import {MeCookiesService} from '../../core/services/Cookies/me-cookies.service';
import {webs} from '../../constants/WebsVar';

@Component({
  selector: 'app-user-page',
  imports: [
    PedidosUser,
  ],
  templateUrl: './user-page.html',
  styleUrl: './user-page.scss',
})
export class UserPage implements OnInit {
    constructor(
      private meCookieService: MeCookiesService,
    ) {}

  nombre=signal<string>("")

  ngOnInit() {
      this.nombre.set(
        JSON.parse(this.meCookieService.get(webs.token)).data.email
      );
  }

}
