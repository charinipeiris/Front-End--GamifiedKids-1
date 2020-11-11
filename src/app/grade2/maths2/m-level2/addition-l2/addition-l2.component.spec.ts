import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdditionL2Component } from './addition-l2.component';

describe('AdditionL2Component', () => {
  let component: AdditionL2Component;
  let fixture: ComponentFixture<AdditionL2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdditionL2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdditionL2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
