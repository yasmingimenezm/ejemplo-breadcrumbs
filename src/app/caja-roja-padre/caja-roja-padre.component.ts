import { Component, OnInit } from '@angular/core';
import { BreadcrumbService } from 'xng-breadcrumb';
import { Router } from '@angular/router';

@Component({
  selector: 'app-caja-roja-padre',
  templateUrl: './caja-roja-padre.component.html',
  styleUrls: ['./caja-roja-padre.component.scss']
})
export class CajaRojaPadreComponent implements OnInit {

  constructor(private breadcrumbService: BreadcrumbService, private router: Router) { }

  ngOnInit(): void {
    this.breadcrumbService.set('@roja-padre', 'Roja - Padre');
  }

  checkRouteUrl() {
    return this.router.url == '/';
  }

}
