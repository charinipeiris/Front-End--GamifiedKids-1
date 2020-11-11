import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LengthL2Component } from './length-l2.component';

describe('LengthL2Component', () => {
  let component: LengthL2Component;
  let fixture: ComponentFixture<LengthL2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LengthL2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LengthL2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
