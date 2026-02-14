import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummerCamp } from './summer-camp';

describe('SummerCamp', () => {
  let component: SummerCamp;
  let fixture: ComponentFixture<SummerCamp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SummerCamp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SummerCamp);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
