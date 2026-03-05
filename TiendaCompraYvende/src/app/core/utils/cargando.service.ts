import { Injectable } from '@angular/core';
import Swal from 'sweetalert2'
import {CarritoService} from '../services/carrito/carrito.service';


@Injectable({
  providedIn: 'root',
})
export class CargandoService {

  constructor(private carritoService: CarritoService) {
  }


  showLoader(title: string = "Cargando...", description: string = "Espere unos segundos") {
    Swal.fire({
      title: title,
      text: description,
      showConfirmButton: false,
      allowOutsideClick: false,
      allowEscapeKey: false,
      didOpen: () => {
        Swal.showLoading()
      }
    })
  }

  confirm(title: string,text:string=""): void {
    Swal.fire({
      title: title,
      text:text ,
      icon: "success"
    });
  }

  confirmarEliminacion() {
    Swal.fire({
      title: '¿Estás seguro?',
      text: "¡No podrás revertir esto!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, borrar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.carritoService.setCarrito()
        this.carritoService.carritoActualizado()
      }
    });
  }


  alert(title: string,
        description: string,
        icon: "warning" | "info" | "error" | "success"): void {

    Swal.fire({
      title: title,
      text: description,
      icon: icon,
      showConfirmButton: true,
      allowOutsideClick: true,
      confirmButtonText: "Cerrar notificación"
    })
  }

  // miniswal(){
  //   Swal.mixin({
  //     toast: true,
  //     position: "top-end",
  //     showConfirmButton: false,
  //     timer: 3000,
  //     timerProgressBar: true,
  //     didOpen: (toast) => {
  //       toast.onmouseenter = Swal.stopTimer;
  //       toast.onmouseleave = Swal.resumeTimer;
  //     }
  //   });
  //   Toast.fire({
  //     icon: "success",
  //     title: "Signed in successfully"
  //   });
  // }

  popupErrores(err: any,titulo: string) {
    let msg = "Error desconocido. Contacte con soporte."
    if (err.error.erroresBackend) {
      msg = ""
      for (let i = 0; i < err.error.erroresBackend.length; i++) {
        msg += "- " + err.error.erroresBackend[i] + "\n"
      }
    }
    this.alert(
      titulo,
      msg,
      "error",
    )
  }

  hide() {
    Swal.close()
  }

}
