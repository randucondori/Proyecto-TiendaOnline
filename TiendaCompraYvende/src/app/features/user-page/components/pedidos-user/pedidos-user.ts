import {Component, OnInit, signal} from '@angular/core';
import {PedidosService} from '../../../../core/services/pedidos/pedidos.service';
import {pedidos} from '../../../../core/interfaces/pedidos';


@Component({
  selector: 'app-pedidos-user',
  imports: [],
  templateUrl: './pedidos-user.html',
  styleUrl: './pedidos-user.scss',
})
export class PedidosUser implements OnInit {

  pedidos=signal<pedidos[]>([])

  constructor(
    private pedidoService: PedidosService
  ) {}


  ngOnInit() {
    this.pedidoService.getPedidos().subscribe({
      next: data => {
        this.pedidos.set(data.pedidos);
      },
      error: error => {

      }
    })
  }
}
