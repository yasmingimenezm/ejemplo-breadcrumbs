import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CajaAzulHijoAComponent } from './caja-azul-hijo-a.component';

describe('CajaAzulHijoAComponent', () => {
  let component: CajaAzulHijoAComponent;
  let fixture: ComponentFixture<CajaAzulHijoAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CajaAzulHijoAComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CajaAzulHijoAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
