import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarraOpciones } from './barra-opciones';

describe('BarraOpciones', () => {
  let component: BarraOpciones;
  let fixture: ComponentFixture<BarraOpciones>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BarraOpciones]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarraOpciones);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
