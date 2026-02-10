import {Component, signal} from '@angular/core';
import {HeadMain} from './components/head-main/head-main';
import {Registro} from './components/registro/registro';
import {Footer} from './components/footer/footer';
import {RouterOutlet} from '@angular/router';
import {NgClass} from '@angular/common';


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
