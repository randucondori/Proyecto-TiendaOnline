import { Routes } from '@angular/router';

export const routes: Routes = [
  {path:"",
    loadComponent:()=>import("./layouts/main-layout/main-layout").then((c)=>c.MainLayout)
  },
  {
    path:"productosAdmin",
    loadComponent:()=>import("./features/productos-admin/productos-admin").then(c=>c.ProductosAdmin)
  }
];
