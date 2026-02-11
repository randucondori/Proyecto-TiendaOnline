import {AbstractControl, ValidationErrors} from "@angular/forms";


export function ValidandoEmail(control: AbstractControl):ValidationErrors|null{
    let email= String(control.value)
    if(!email || email===""){
      return {"VacioError":true}
    }
    if(! /(?=.*@)[a-z._@]+/i.test(email)){
      return {"ArrobaError":true}
    }

    if(!/^[a-z0-9._]+(@)[a-z0-9.-]+\.(com|es)$/i.test(email)){
      return {"FormatoError":true}
    }
    return null
}
