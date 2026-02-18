import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErroPage } from './erro-page';

describe('ErroPage', () => {
  let component: ErroPage;
  let fixture: ComponentFixture<ErroPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ErroPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ErroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
