import { TestBed } from '@angular/core/testing';

import { AcCarrito } from './ac-carrito';

describe('AcCarrito', () => {
  let service: AcCarrito;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AcCarrito);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
