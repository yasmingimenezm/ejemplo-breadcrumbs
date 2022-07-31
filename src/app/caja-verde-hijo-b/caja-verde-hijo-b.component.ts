import { Component, OnInit } from '@angular/core';
import { BreadcrumbService } from 'xng-breadcrumb';

@Component({
  selector: 'app-caja-verde-hijo-b',
  templateUrl: './caja-verde-hijo-b.component.html',
  styleUrls: ['./caja-verde-hijo-b.component.scss']
})
export class CajaVerdeHijoBComponent implements OnInit {

  constructor(private breadcrumbService: BreadcrumbService) { }

  ngOnInit(): void {
    this.breadcrumbService.set('@verde-hijo-b', 'Verde - Hijo B');
  }

}
