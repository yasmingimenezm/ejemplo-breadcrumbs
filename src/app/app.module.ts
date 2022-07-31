import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Componentes creados por nosotros
import { CajaRojaPadreComponent } from './caja-roja-padre/caja-roja-padre.component';
import { CajaAzulHijoAComponent } from './caja-azul-hijo-a/caja-azul-hijo-a.component';
import { CajaVerdeHijoBComponent } from './caja-verde-hijo-b/caja-verde-hijo-b.component';
import { CajaAmarillaHijoBComponent } from './caja-amarilla-hijo-b/caja-amarilla-hijo-b.component';

// Librería xng-breadcrumb
import { BreadcrumbModule } from "xng-breadcrumb";
import { BreadcrumbsBarComponent } from './breadcrumbs-bar/breadcrumbs-bar.component';


@NgModule({
  declarations: [
    AppComponent,
    CajaRojaPadreComponent,
    CajaAzulHijoAComponent,
    CajaVerdeHijoBComponent,
    CajaAmarillaHijoBComponent,
    BreadcrumbsBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //Librería xng-breadcrumb
    BreadcrumbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
