import {Component, signal} from '@angular/core';
import {HeadMain} from './components/head-main/head-main';
import {Registro} from './components/registro/registro';


@Component({
  selector: 'app-main-layout',
  imports: [
    HeadMain,
    Registro
  ],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.scss',
  standalone:true
})
export class MainLayout {

}
