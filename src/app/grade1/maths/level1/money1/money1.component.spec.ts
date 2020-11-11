import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Money1Component } from './money1.component';

describe('Money1Component', () => {
  let component: Money1Component;
  let fixture: ComponentFixture<Money1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Money1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Money1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
