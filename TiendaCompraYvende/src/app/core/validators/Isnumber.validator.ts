import {AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms';
import {Observable, of} from 'rxjs';

export function IsnumberValidator(min:number=6,max:number=30):ValidatorFn{
  return (control: AbstractControl): ValidationErrors | null => {
    if (Number(control.value.length) < min) {
      return {'cantidadError': true}
    }
    if(!/^(?!.*[a-zA-Z]+)[0-9]+$/.test(control.value.toString())) {
      return {'NotNumber': true}
    }
    return null;
  }

}

