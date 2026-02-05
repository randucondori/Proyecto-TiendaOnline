import {Component, output} from '@angular/core';

@Component({
  selector: 'app-auth',
  imports: [],
  templateUrl: './auth.html',
  styleUrl: './auth.scss',
  standalone:true
})
export class Auth {
  salirDeLogin=output()
  salirLogin=output()

}
