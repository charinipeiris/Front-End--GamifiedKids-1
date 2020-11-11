import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LengthL1Component } from './length-l1.component';

describe('LengthL1Component', () => {
  let component: LengthL1Component;
  let fixture: ComponentFixture<LengthL1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LengthL1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LengthL1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
