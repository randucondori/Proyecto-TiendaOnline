import { Component } from '@angular/core';
import {ShowProductos} from '../show-productos/show-productos';

@Component({
  selector: 'app-inicio-page',
  imports: [
    ShowProductos
  ],
  templateUrl: './inicio-page.html',
  styleUrl: './inicio-page.scss',
})
export class InicioPage {

}
