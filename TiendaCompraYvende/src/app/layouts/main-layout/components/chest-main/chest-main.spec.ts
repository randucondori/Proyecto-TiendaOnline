import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChestMain } from './chest-main';

describe('ChestMain', () => {
  let component: ChestMain;
  let fixture: ComponentFixture<ChestMain>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChestMain]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChestMain);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
