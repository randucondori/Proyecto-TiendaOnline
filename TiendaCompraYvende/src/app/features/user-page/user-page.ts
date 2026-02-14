import { Component } from '@angular/core';
import {PedidosUser} from './components/pedidos-user/pedidos-user';
import {CategoriasUser} from './components/categorias-user/categorias-user';

@Component({
  selector: 'app-user-page',
  imports: [
    PedidosUser,
    CategoriasUser
  ],
  templateUrl: './user-page.html',
  styleUrl: './user-page.scss',
})
export class UserPage {

}
