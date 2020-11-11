import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Length1Component } from './length1.component';

describe('Length1Component', () => {
  let component: Length1Component;
  let fixture: ComponentFixture<Length1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Length1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Length1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
