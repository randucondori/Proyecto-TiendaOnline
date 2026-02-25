import {AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms';
import {Observable, of} from 'rxjs';

export function PassValid(min:number=6,max:number=30):ValidatorFn{
  return (control: AbstractControl): ValidationErrors | null => {
    if (Number(control.value.length) < min) {
      return {'cantidadError': true}
    }
    return null;
  }

}

