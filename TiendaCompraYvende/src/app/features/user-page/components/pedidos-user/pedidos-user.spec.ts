import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidosUser } from './pedidos-user';

describe('PedidosUser', () => {
  let component: PedidosUser;
  let fixture: ComponentFixture<PedidosUser>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PedidosUser]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PedidosUser);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
