import { Routes } from '@angular/router';
import {compraGuard} from './core/guards/comprar/compra-guard';
import {inicioGuard} from './core/guards/inicio/inicio-guard';

export const routes: Routes = [
  {path:"",
    loadComponent:()=>import("./layouts/main-layout/main-layout").then((c)=>c.MainLayout),
    canActivate:[inicioGuard],
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
  {
    path:"sesion",
    canActivate:[compraGuard],
    loadComponent:()=>import("./layouts/layout-user/layout-user").then(c=>c.LayoutUser),
    children:[
      {
        path:"user",
        loadComponent:()=>import("./features/user-page/user-page").then(c=>c.UserPage)
      },{
        path:"inicio",
        loadComponent:()=>import("./features/inicio-page/inicio-page").then(c=>c.InicioPage)
      },{
      path:"explorer",
        loadComponent:()=>import("./features/explorer/explorer").then(c=>c.Explorer)
      },{
      path:"favorite",
        loadComponent:()=>import("./features/favorite/favorite").then(c=>c.Favorite)
      }


    ]
  }
];
