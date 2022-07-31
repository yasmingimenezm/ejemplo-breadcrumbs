import { Component, OnInit } from '@angular/core';
import { BreadcrumbService } from 'xng-breadcrumb';
import { Router } from '@angular/router';

@Component({
  selector: 'app-caja-azul-hijo-a',
  templateUrl: './caja-azul-hijo-a.component.html',
  styleUrls: ['./caja-azul-hijo-a.component.scss']
})
export class CajaAzulHijoAComponent implements OnInit {

  constructor(private breadcrumbService: BreadcrumbService, private router: Router) { }

  ngOnInit(): void {
    this.breadcrumbService.set('@azul-hijo-a', 'Azul - Hijo A');
  }

  checkRouteUrl() {
    return this.router.url == '/azul-hijo-a';
  }

}
