import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CajaVerdeHijoBComponent } from './caja-verde-hijo-b.component';

describe('CajaVerdeHijoBComponent', () => {
  let component: CajaVerdeHijoBComponent;
  let fixture: ComponentFixture<CajaVerdeHijoBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CajaVerdeHijoBComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CajaVerdeHijoBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
