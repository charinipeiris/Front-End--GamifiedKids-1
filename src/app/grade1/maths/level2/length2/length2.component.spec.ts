import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Length2Component } from './length2.component';

describe('Length2Component', () => {
  let component: Length2Component;
  let fixture: ComponentFixture<Length2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Length2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Length2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
