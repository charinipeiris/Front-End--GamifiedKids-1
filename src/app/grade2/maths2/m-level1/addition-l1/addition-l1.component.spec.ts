import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdditionL1Component } from './addition-l1.component';

describe('AdditionL1Component', () => {
  let component: AdditionL1Component;
  let fixture: ComponentFixture<AdditionL1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdditionL1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdditionL1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
