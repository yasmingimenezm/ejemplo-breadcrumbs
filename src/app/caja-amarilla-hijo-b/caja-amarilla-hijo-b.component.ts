import { Component, OnInit } from '@angular/core';
import { BreadcrumbService } from 'xng-breadcrumb';

@Component({
  selector: 'app-caja-amarilla-hijo-b',
  templateUrl: './caja-amarilla-hijo-b.component.html',
  styleUrls: ['./caja-amarilla-hijo-b.component.scss']
})
export class CajaAmarillaHijoBComponent implements OnInit {

  constructor(private breadcrumbService: BreadcrumbService) { }

  ngOnInit(): void {
    this.breadcrumbService.set('@amarilla-hijo-b', 'Amarilla - Hijo B');
  }

}
