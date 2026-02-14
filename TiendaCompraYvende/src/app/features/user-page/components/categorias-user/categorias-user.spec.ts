import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriasUser } from './categorias-user';

describe('CategoriasUser', () => {
  let component: CategoriasUser;
  let fixture: ComponentFixture<CategoriasUser>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoriasUser]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoriasUser);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
