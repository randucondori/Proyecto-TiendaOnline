import { Routes } from '@angular/router';
import {compraGuard} from './core/guards/comprar/compra-guard';

export const routes: Routes = [
  {path:"",
    loadComponent:()=>import("./layouts/main-layout/main-layout").then((c)=>c.MainLayout),
    children:[
      {path:"register",
      loadComponent:()=>import("./layouts/main-layout/components/registro/registro").then(c=>c.Registro)}
      ,
      {path:"",
        loadComponent:()=>import("./layouts/main-layout/components/auth/auth").then(c=>c.Auth)}
    ]
  },
  {
    path:"productosAdmin",
    canActivate:[compraGuard],
    loadComponent:()=>import("./features/productos-admin/productos-admin").then(c=>c.ProductosAdmin)
  },
];
