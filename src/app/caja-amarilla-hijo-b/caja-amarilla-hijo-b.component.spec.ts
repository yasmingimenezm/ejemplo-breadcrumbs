import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CajaAmarillaHijoBComponent } from './caja-amarilla-hijo-b.component';

describe('CajaAmarillaHijoBComponent', () => {
  let component: CajaAmarillaHijoBComponent;
  let fixture: ComponentFixture<CajaAmarillaHijoBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CajaAmarillaHijoBComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CajaAmarillaHijoBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
