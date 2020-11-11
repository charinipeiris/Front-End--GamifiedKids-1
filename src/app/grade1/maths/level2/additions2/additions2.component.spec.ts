import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Additions2Component } from './additions2.component';

describe('Additions2Component', () => {
  let component: Additions2Component;
  let fixture: ComponentFixture<Additions2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Additions2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Additions2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
