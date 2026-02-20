import { Component } from '@angular/core';
import {PedidosUser} from './components/pedidos-user/pedidos-user';

@Component({
  selector: 'app-user-page',
  imports: [
    PedidosUser,
  ],
  templateUrl: './user-page.html',
  styleUrl: './user-page.scss',
})
export class UserPage {

}
