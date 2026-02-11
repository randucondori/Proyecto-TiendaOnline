import {AbstractControl, ValidationErrors} from '@angular/forms';
import {Observable, of} from 'rxjs';

export function PassValid(min=6,max=30){
  return (control: AbstractControl):Observable<ValidationErrors | null> => {
    if (Number(control.value.length) < min) {
      return of({'cantidadError': true})
    }
    return of(null);
  }

}
