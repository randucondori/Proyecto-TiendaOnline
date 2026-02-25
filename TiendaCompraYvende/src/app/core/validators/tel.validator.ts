import {AbstractControl, ValidationErrors} from '@angular/forms';
import {Observable, of} from 'rxjs';

export function TelValidator(min:number=9,max:number=30){
  return (control: AbstractControl):ValidationErrors | null => {
    if (Number(control.value.length) < min) {
      return {'cantidadError': true}
    }
    if(!/^[0-9]+$/.test(control.value)){
      return {'ValueErrorTel': true}
    }
    return null;
  }

}
