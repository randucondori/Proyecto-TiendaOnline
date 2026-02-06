import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowProductos } from './show-productos';

describe('ShowProductos', () => {
  let component: ShowProductos;
  let fixture: ComponentFixture<ShowProductos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowProductos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowProductos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
