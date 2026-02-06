import { Routes } from '@angular/router';

export const routes: Routes = [
  {path:"",
    loadComponent:()=>import("./layouts/main-layout/main-layout").then((c)=>c.MainLayout),
    children:[
      {path:"",
      loadComponent:()=>import("./features/show-productos/show-productos").then(c=>c.ShowProductos)}
    ]
  },
  {
    path:"productosAdmin",
    loadComponent:()=>import("./features/productos-admin/productos-admin").then(c=>c.ProductosAdmin)
  }
];
