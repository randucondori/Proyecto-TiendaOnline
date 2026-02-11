import {Component} from '@angular/core';
import {HeadMain} from './components/head-main/head-main';
import {Footer} from './components/footer/footer';
import {RouterOutlet} from '@angular/router';
import {CargandoModel} from '../../shared/models/cargando-model/cargando-model';



@Component({
  selector: 'app-main-layout',
  imports: [
    HeadMain,
    Footer,
    RouterOutlet,

  ],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.scss',
  standalone:true
})
export class MainLayout {

}
