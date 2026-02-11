import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IniciaCon } from './inicia-con';

describe('IniciaCon', () => {
  let component: IniciaCon;
  let fixture: ComponentFixture<IniciaCon>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IniciaCon]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IniciaCon);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
