import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoneyL2Component } from './money-l2.component';

describe('MoneyL2Component', () => {
  let component: MoneyL2Component;
  let fixture: ComponentFixture<MoneyL2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoneyL2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoneyL2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
