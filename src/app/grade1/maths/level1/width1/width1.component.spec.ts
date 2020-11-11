import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Width1Component } from './width1.component';

describe('Width1Component', () => {
  let component: Width1Component;
  let fixture: ComponentFixture<Width1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Width1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Width1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
