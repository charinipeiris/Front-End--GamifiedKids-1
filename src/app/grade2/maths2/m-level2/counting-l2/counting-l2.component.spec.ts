import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountingL2Component } from './counting-l2.component';

describe('CountingL2Component', () => {
  let component: CountingL2Component;
  let fixture: ComponentFixture<CountingL2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountingL2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountingL2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
