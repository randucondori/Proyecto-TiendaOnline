import {Component, signal} from '@angular/core';
import {HeadMain} from './components/head-main/head-main';
import {RouterOutlet} from '@angular/router';
import {BarraLateral} from './components/barra-lateral/barra-lateral';

@Component({
  selector: 'app-main-layout',
  imports: [
    HeadMain,
    RouterOutlet,
    BarraLateral
  ],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.scss',
  standalone:true
})
export class MainLayout {

}
