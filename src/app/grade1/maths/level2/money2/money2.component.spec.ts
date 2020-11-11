import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Money2Component } from './money2.component';

describe('Money2Component', () => {
  let component: Money2Component;
  let fixture: ComponentFixture<Money2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Money2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Money2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
