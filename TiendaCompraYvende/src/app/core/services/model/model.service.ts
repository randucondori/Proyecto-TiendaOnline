import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ModelService {

  visible:BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  action$:Observable<boolean>= this.visible.asObservable()

  show():void {
    this.visible.next(true);
  }
  hide():void {
    this.visible.next(false);
  }

}
