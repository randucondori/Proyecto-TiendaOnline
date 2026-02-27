
export type pedidos = {
  usuario:string,
  pedido:pedido[],
  estado:string,
  fecha:string,
  pago:number
}
export type pedido= {
  nombre: string,
    precio: number,
    cantidad:number,
    imagen:string,
}
