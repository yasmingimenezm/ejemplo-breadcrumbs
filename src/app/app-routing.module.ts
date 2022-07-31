import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CajaAmarillaHijoBComponent } from './caja-amarilla-hijo-b/caja-amarilla-hijo-b.component';
import { CajaAzulHijoAComponent } from './caja-azul-hijo-a/caja-azul-hijo-a.component';
import { CajaRojaPadreComponent } from './caja-roja-padre/caja-roja-padre.component';
import { CajaVerdeHijoBComponent } from './caja-verde-hijo-b/caja-verde-hijo-b.component';

const routes: Routes = [
  {
    path: '',
    component: CajaRojaPadreComponent,
    data: {breadcrumb: {alias: 'roja-padre'}},
    children: [
      {
        path: 'azul-hijo-a',
        component: CajaAzulHijoAComponent,
        data: {breadcrumb: {alias: 'azul-hijo-a'}},
        children: [
          {
            path: 'amarilla-hijo-b',
            component: CajaAmarillaHijoBComponent,
            data: {breadcrumb: {alias: 'amarilla-hijo-b'}}
          },
          {
            path: 'verde-hijo-b',
            component: CajaVerdeHijoBComponent,
            data: {breadcrumb: {alias: 'verde-hijo-b'}}
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
