import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountingL1Component } from './counting-l1.component';

describe('CountingL1Component', () => {
  let component: CountingL1Component;
  let fixture: ComponentFixture<CountingL1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountingL1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountingL1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
