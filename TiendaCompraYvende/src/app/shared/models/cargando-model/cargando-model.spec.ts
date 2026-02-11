import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CargandoModel } from './cargando-model';

describe('CargandoModel', () => {
  let component: CargandoModel;
  let fixture: ComponentFixture<CargandoModel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CargandoModel]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CargandoModel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
