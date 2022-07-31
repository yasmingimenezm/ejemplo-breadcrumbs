import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CajaRojaPadreComponent } from './caja-roja-padre.component';

describe('CajaRojaPadreComponent', () => {
  let component: CajaRojaPadreComponent;
  let fixture: ComponentFixture<CajaRojaPadreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CajaRojaPadreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CajaRojaPadreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
