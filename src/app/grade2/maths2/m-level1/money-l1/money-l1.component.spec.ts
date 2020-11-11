import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoneyL1Component } from './money-l1.component';

describe('MoneyL1Component', () => {
  let component: MoneyL1Component;
  let fixture: ComponentFixture<MoneyL1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoneyL1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoneyL1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
